import { useState } from 'react';
import { Heart } from 'lucide-react';
import Tag from '../../ui/Tag';
import { cn } from '../../../lib/utils';

const Card = ({ property }) => {
    const [favorite, setFavorite] = useState(false);
    const [setColorChecked] = useState('fill-red-500');

    const handleFavoriteClick = () => {
        setFavorite((value) => !value);
        setColorChecked(favorite ? '' : '');
    }

    return (
        <div className="w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="w-[30%] relative">
                <img 
                    className="w-full h-full object-cover" 
                    src={property.image} 
                    alt="Casa" 
                />
            </div>
            <div className="p-4 flex-1">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{property.title}</h3>
                    <div className="flex items-center space-x-2">
                        <Tag text={"Destacado"} type={"outstanding"} />
                        <Tag text={"En venta"} type={"sale"} />
                    <button onClick={handleFavoriteClick}>
                        <Heart className={cn('',{
                            'fill-red-500 text-red-500': favorite,
                        })} />
                    </button>
                    </div>
                </div>
                <p className="text-gray-500">{property.location}</p>
                <div className="flex space-x-4 my-2">
                    <div className="flex items-center">
                        <span className="text-gray-600">Habitaciones:</span>
                        <span className="ml-1 text-gray-800 font-semibold">{property.rooms}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600">Baños:</span>
                        <span className="ml-1 text-gray-800 font-semibold">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600">Metros cuadrados:</span>
                        <span className="ml-1 text-gray-800 font-semibold">{property.size}</span>
                    </div>
                </div>
                <div className="text-lg text-gray-800 font-bold mb-2">
                    {property.price} ARS / mensual
                </div>
                <p className="text-gray-700 mb-4">
                    {property.description}
                </p>
                <div className="border-t pt-4">
                    <h4 className="text-gray-600 font-semibold">Contacto del vendedor</h4>
                    <div className="flex items-center mt-2">
                        <img className="w-8 h-8 rounded-full" src={property.sellerImage} alt="Vendedor" />
                        <div className="ml-3">
                            <p className="text-gray-800 font-semibold">{property.sellerName}</p>
                            <p className="text-gray-600">{property.sellerPhone}</p>
                            <p className="text-gray-600">{property.sellerEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
