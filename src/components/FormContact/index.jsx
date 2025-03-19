import React from 'react'
import styles from './styles.module.css'

export const FormContact = () => {
  return (
    <form className={styles.form} method='post' name='portafolio'>
        <input type='hidden' name='form-name' value='portafolio' />
        <label htmlFor="email">Tu email</label>
        <input type="text" id="email" name="destinatario" required />
        <label htmlFor="asunto">Asunto</label>
        <input type="text" id="asunto" name="asunto" required />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="escribe aqui..." required></textarea>
        
        <button type="submit" className="btn">
            Enviar
        </button>
    </form>
  )
}
