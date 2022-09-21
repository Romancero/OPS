import '../style-components/Img.css'

let Img = ({ classAditional }) => {
  return (
    <div className={classAditional}>
      <img src={require(`../images/logo_opschool_ig.png`)} alt="logo"/>
    </div>
  );
};

export default Img;