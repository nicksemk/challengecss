import styles from  './CarComponents.module.css';

const CarComponents = ({brand, color, model, km}) => {
  return (
    <div className={styles.CarComponents}>
        <h2> {brand}</h2>
        <h4>Cor: {color}</h4>
        <h4>Modelo: {model}</h4>
        <h4>km: {km}</h4>
        {km <= 0 ? (<p>Carro novo!</p>
        ):( <p>Carro usado!</p>
        )}
    </div>
  )
}

export default CarComponents