type ResultsProps={
    results:{
        zipcode:string,
        address1:string,
        address2:string,
        address3:string,
        kana1:string,
        kana2:string,
        kana3:string
    }
}

const Results=(props:ResultsProps)=>{
    const fullAddress=props.results.address1+props.results.address2+props.results.address3;
    return(
        <div className="results">
            <h2>郵便番号：{props.results.zipcode}</h2>
            <div className="addressinfo">
                <div>
                    <p>都道府県：{props.results.address1}</p>
                    <p>市区町村：{props.results.address2}</p>    
                    <p>町域：{props.results.address3}</p>
                </div>
                <div>
                    <p>都道府県(ｶﾅ)：{props.results.kana1}</p>
                    <p>市区町村(ｶﾅ)：{props.results.kana2}</p>    
                    <p>町域(ｶﾅ)：{props.results.kana3}</p>
                </div>
            </div>
            <iframe
                title="map"
                style={{ border: 0, marginTop: "1rem" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
            />
        </div>
    )
}
export default Results