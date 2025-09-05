type FormProps={
    setZipcode : React.Dispatch<React.SetStateAction<string>>
    getZipcode : (e:React.FormEvent<HTMLFormElement>) => void
}

const Form=(props:FormProps)=>{
    return(
        <form onSubmit={props.getZipcode}>
            <input 
                type="text"
                name="zipcode"
                placeholder="郵便番号(ハイフンなし)"
                onChange={e=>props.setZipcode(e.target.value)}
            />
            <button type="submit">住所検索</button>
        </form>
    )
}
export default Form