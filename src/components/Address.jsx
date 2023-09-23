const Address = (props) => {
  const choseAddress = () => {
    return props.choseAddress()
  }

  return (
    <div className=" justify-content-center mt-4 ">
      <h2>Choose the address </h2>
      <br />
      <div className="container w-75 justify-content-left">
        <div className="form-check">
          <input type="radio" checked />
          <label htmlFor="" className="ml-2 form-check-label">Use default address <span className="text-muted">(140 Fairlands Park, Newcastle, Galway, H91 CKU9)</span></label>
        </div>

        <div className="form-check">
          <input type="radio" />
          <label htmlFor="" className="ml-2 form-check-label">Add new address</label>
        </div>

      </div>
      


    </div>
  )
}
export default Address