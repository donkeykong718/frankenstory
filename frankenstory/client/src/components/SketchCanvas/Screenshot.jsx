import html2canvas from 'html2canvas'
import logo from '/Users/ayifee/Codes/unit-3/frankenstory/frankenstory/client/src/components/Header/Header assets/Frank_logo.svg'

function Screenshot() {
  var buttonStyle = {
    margin: '10px 10px 10px 0',
    color: 'black',
    background: 'white',
    cursor: 'pointer',
    display: 'flex'
  };

  const CaptureImage = () => {
    html2canvas(document.body).then(function (canvas) {

      var a = document.createElement('a');
      a.href = canvas.toDataURL('..assets/image/jpeg')
        .replace("image/jpeg", "image/octet-stream");
      a.donwload = 'filename.jpg';
      a.click();

    });
    return (
      <div className='Screenshot'>
        <header className="Screenshot-Header">
          <p>
            takes screen shot of page
          </p>
          <button
            className="btn btn-default"
            id='button'
            onClick={CaptureImage}>Save Image</button>
        </header>
      </div>
    )
  }
}

export default Screenshot