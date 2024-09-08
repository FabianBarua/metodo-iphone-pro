import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';

export const Photos = () => {

    const images = [
        {
            id: 'cap1',
            url: '/cap1.jpeg'
        },
        {
            id: 'cap2',
            url: '/cap2.jpeg'
        },
        {
            id: 'cap3',
            url: '/cap3.jpeg'
        },
        {
            id: 'cap4',
            url: '/cap4.jpeg'
        },
        {
            id: 'cap5',
            url: '/cap5.jpeg'
        },
        {
            id: 'cap6',
            url: '/cap6.jpeg'
        }
    ]

    return (
        <PhotoProvider>
            {images.map((item, index) => (
                <PhotoView key={item.id} src={item.url}>
                    <img className=' w-40 overflow-hidden aspect-square sm:aspect-auto object-cover sm:h-auto sm:w-40 rounded-xl' src={item.url} alt="" />
                </PhotoView>
            ))}
        </PhotoProvider>
    );
}