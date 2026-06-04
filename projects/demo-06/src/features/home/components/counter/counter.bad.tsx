

interface Props {
    id?: number;
}

export const CounterBad: React.FC<Props> = ({ id }) => {

    let count = 0

    const handlerClick =  () => {
        // eslint-disable-next-line react-hooks/immutability
        count = count + 1; 
        console.log('Counter clicked', count);
    }


   
    return (
        <div className="counter-container">
            <h3>Counter {id ? ` - ${id}` : ''}</h3>
            <button
                type="button"
                className="counter"
                // eslint-disable-next-line react-hooks/immutability
                onClick={handlerClick}
            >
                Count is {count}
            </button>
        </div>
    );
};
