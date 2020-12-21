import './newAddForm.css';
import validator from 'validator';
import axios from 'axios';
import newAddForm from './newAddForm.hbs';
import { modalBackDrop } from '../../../components/modal/modalBackDrop'
console.log(modalBackDrop);

window.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.modal-btn');
    let modal = document.querySelector('.modal');
    // modal.style.display = 'none';
    let x = document.querySelector('.close');

    console.log(btn);
    console.log(modal);
    console.log(x);


    btn.addEventListener('click', ( ) => {
        modal.style.display = 'block';
    }) 
    
    btn.addEventListener('mouseover', ( ) => {
        btn.style.cursor = 'pointer';
    })

    x.addEventListener('click', ( ) => {
        modal.style.display = 'none';
    
    })
    x.addEventListener('mouseover', ( ) => { 
        x.style.cursor = 'pointer';
    })

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    })

    window.addEventListener('keydown', (event) => {
         if (event.key === 'Escape'){
            modal.style.display = 'none';
         }
        })
})
