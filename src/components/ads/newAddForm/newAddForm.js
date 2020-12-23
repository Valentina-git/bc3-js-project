import './newAddForm.css';
import validator from 'validator';
import axios from 'axios';
import newAddForm from '../newAddForm/templates/newAddForm.hbs';
import inputPlus from '../newAddForm/templates/inputPlus.hbs'
import inputGrey from '../newAddForm/templates/inputGrey.hbs'
import { modalBackDrop } from '../../modal/modalBackDrop';


const createModalMarkup = document.querySelector('.markup_btn')
createModalMarkup.innerHTML = newAddForm();

const formAdv = document.forms.newAdvForm;
const baseURL = 'https://callboard-backend.herokuapp.com/call';

const newObjAdv = {
    title: '',
    description: '',
    category: '',
    price: '',
    phone: '',
    file: [],
}

const toDataURL = (elem) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onLoadend = () => resolve(reader.result)
        reader.readAsDataURL(elem.files[0])
    })
}

const createBox = () => {
    const inputWrapper = document.querySelector('.input_wrapper');
    inputWrapper.innerHTML = '';
    console.log(newObjAdv);
    
    newObjAdv
        .file
        .forEach(img => inputWrapper
            .insertAdjacentHTML('beforeend',
                `<img src=${img} alt="" class ="img-adv-box" name="file">`))
    if (newObjAdv.file.length < 6) {
        inputWrapper
            .insertAdjacentHTML('beforeend', inputPlus())
        const input = document.querySelector('.input_load_file')
        console.log(input);

        input.addEventListener('change', async (event) => {
            console.log('hello');

             toDataURL(event.target)
                .then(data => {
                    console.log(data)
                    newObjAdv.file.push(data)
                }).then(createBox)
            console.log(newObjAdv);
            })
    }
    for (let i = newObjAdv.file.length; i < 5; i += 1) {
        inputWrapper
            .insertAdjacentHTML('beforeend', inputGrey())
    }
}
createBox()

const getFormData = (event) => {
    if (event.target === 'file') {
        return
    }
    const { name, value } = event.target;
    newObjAdv[name] = value;
}
formAdv.addEventListener('input', getFormData)

const postNewAdv = async (event) => {
    event.preventDefault();
    
    const result = await axios.post(baseURL, {
        ...newObjAdv, price: Number(newObjAdv.price)
    })
}
formAdv.addEventListener('submit', postNewAdv)








