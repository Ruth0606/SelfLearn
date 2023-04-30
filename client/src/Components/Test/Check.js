

const Check=(props)=>{
    return(<>
  {  props.arr.forEach(element => {
        return(
        <span>{element}</span>
            )
    })}
    </>
   )
}
export default Check