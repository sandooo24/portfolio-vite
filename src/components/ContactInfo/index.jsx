import React from 'react'
import contacts from '../../assets/contacts.json'
import { FormContact } from '../FormContact';
import styles from './styles.module.css';

export const ContactInfo = () =>{
    return (
        <div className={styles.contacto}>
            <FormContact/>
            <ContactList contacts={contacts}/>
        </div>
    );
}

const ContactList = ({contacts}) => {
  return (
        <div className={styles.listContacts}>
            {contacts.map( (contact,index) =>{
                return <CardContact data={contact} key={index} />
            })}
        </div>
    )
}

const CardContact = ({data}) =>{
    const {contact , link, img} = data;

    return (
        <div className={styles.cardContact}>
            <img src={`${img}`} width="25"/>
            {link !== "" ? 
                <a href={link}>
                    {contact}
                </a>
            :
                <a>
                    {contact}
                </a>
            }
        </div>
    );
}