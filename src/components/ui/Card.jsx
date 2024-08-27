import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

const Card = ({ title, children }) => {
    const [favorite, setFavorite] = useState(false);
    const [setColorChecked] = useState('fill-red-500');

    const handleFavoriteClick = () => {
        setFavorite((value) => !value);
        setColorChecked(favorite ? '' : '');
    }

    return (
        <div className='grid grid-rows-2'>
            <img src="{}" alt="{}" />
            <div className='grid grid-cols-4 '>
                <div>
                    <h2>{title}</h2>
                    <button onClick={handleFavoriteClick}>
                        <Heart className={cn('',{
                            'fill-red-500': favorite,
                        })} />
                    </button>
                </div>
                <div>
                    
                </div>
            </div>
            {children}
        </div>
    );
}

export default Card;