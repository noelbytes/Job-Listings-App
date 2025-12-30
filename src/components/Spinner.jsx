import { ClipLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({ loadingState }) => {
  return (
    <ClipLoader 
        color="#433ca" 
        loading={loadingState}
        cssOverride={override} 
        size={150}
    />
  )
}

export default Spinner