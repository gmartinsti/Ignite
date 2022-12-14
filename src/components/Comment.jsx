import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
             onDeleteComment(content);
    }

     function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/gmartinsti.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Author: Guilherme Martins</strong>
                            <time title="11 de Maio às 06:15" dateTime="2022-12-08 96:15">Cerca de 2h atrás</time>
                            </div>

                            <button
                                onClick={handleDeleteComment} 
                                title="Deletar comentário">
                                <Trash size={24} />

                            </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp size={18} />
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}