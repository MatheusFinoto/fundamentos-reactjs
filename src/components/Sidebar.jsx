import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>

            <div className={styles.profile}>
                <img className={styles.avatar}src='https://avatars.githubusercontent.com/u/27395415?v=4' />
                <strong>Matheus Finoto</strong>
                <span>Mobile Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}