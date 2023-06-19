/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./DetailModule.css";

const DetailModal = ({ setItemDetail, singleData }) => {
  return (
    <div className="mainDiv">
      <div className="row">
      <div className="col-4 text-center">
      <h3>Object Name</h3>
              <p>{singleData?.objectName}</p>
      </div>
      <div className="col-4 text-center">
      <h3>Title</h3>
              <p>{singleData?.title}</p>
      </div>
      <div className="col-4 buttonContainer">
      <Button
      variant="danger"
    className="backButton"
    onClick={() => {
      setItemDetail(true);
    }}
  >
    Back
  </Button></div>
  
</div>
      {singleData?.additionalImages.length != 0 ? (
        <Carousel data-bs-theme="dark" className="crousalData">
          {singleData?.additionalImages.map((img) => (
            <Carousel.Item key={Math.random}>
              <img className="d-block w-100" src={img} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h1 className="text-center"><hr/>No Images<hr/></h1>
      )}
      <div className="row">
        <div className="col-4 ">
          <Card className="detailCard">
            <Card.Img
              variant="top"
              src={singleData?.primaryImage}
              className="cardImg"
            />
          </Card>
        </div>
        <div className="col-4">
          <Card className="detailCard">
            <Card.Body className="detailCardBody">
              <h5>Culture</h5>
              <p>{singleData?.culture}</p>
              <h5>Period</h5>
              <p>{singleData?.period}</p>
              <h5>Dynasty</h5>
              <p>{singleData?.dynasty}</p>
              <h5>Reign</h5>
              <p>{singleData?.reign}</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card className="detailCard">
            <Card.Body className="detailCardBody">
              <h5>Artist Role</h5>
              <p>{singleData?.artistRole}</p>
              <h5>Artist Display Name</h5>
              <p>{singleData?.artistDisplayName}</p>
              <h5>Artist Display Bio</h5>
              <p>{singleData?.artistDisplayBio}</p>
              <h5>Artist Alpha Sort</h5>
              <p>{singleData?.artistAlphaSort}</p>
              <h5>Artist Nationality</h5>
              <p>{singleData?.artistNationality}</p>
              <h5>Artist Wiki Data_URL</h5>
              <p>{singleData?.artistWikidata_URL}</p>
              <h5>Artist ULAN_URL</h5>
              <p>{singleData?.artistULAN_URL}</p>
              <h5>Artist Alpha Sort</h5>
              <p>{singleData?.artistAlphaSort}</p>
            </Card.Body>
          </Card>
        </div>
        <div className="row">
          <div className="col-6">
            <Card className="longCard">
              <Card.Body className="detailCardBody">
                <h5>Credit Line</h5>
                <p>{singleData?.creditLine}</p>
                <h5>Geography Type</h5>
                <p>{singleData?.geographyType}</p>
                <h5>City</h5>
                <p>{singleData?.city}</p>
                <h5>State</h5>
                <p>{singleData?.state}</p>
                <h5>County</h5>
                <p>{singleData?.county}</p>
                <h5>Country</h5>
                <p>{singleData?.country}</p>
                <h5>Region</h5>
                <p>{singleData?.region}</p>
                <h5>Subregion</h5>
                <p>{singleData?.subregion}</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card className="longCard">
              <Card.Body className="detailCardBody">
                <h5>Accession Number</h5>
                <p>{singleData?.accessionNumber}</p>
                <h5>Department</h5>
                <p>{singleData?.department}</p>

                <h5>Object Date</h5>
                <p>{singleData?.objectDate}</p>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Card className="longCard">
          <Card.Body className="detailCardBody">
            <h5 className="text-center">Repository</h5>
            <p className="text-center">{singleData?.repository}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DetailModal;
