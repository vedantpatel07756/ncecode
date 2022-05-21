console.log("hello world");

function css(){
    document.getElementById('html').style.display= 'none';
    document.getElementById('javascript').style.display= 'none';
    
    document.getElementById('css').style.display= 'block';
}

function html(){
    // document.getElementById('xmp').classList.
    document.getElementById('css').style.display= 'none';
    document.getElementById('javascript').style.display= 'none';

    document.getElementById('html').style.display= 'block';

}

function javascript(){
    document.getElementById('css').style.display= 'none';
    document.getElementById('html').style.display= 'none';

    document.getElementById('javascript').style.display= 'block';


}

window.onload = html();