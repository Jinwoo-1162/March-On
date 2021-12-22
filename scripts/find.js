var campus = document.getElementById('location');
var topic = document.getElementById('topic');
var date = document.getElementById('date');

var s1 = document.getElementById('sr1');
var s2 = document.getElementById('sr2');
var s3 = document.getElementById('sr3');
var s4 = document.getElementById('sr4');

var go = document.getElementsByClassName('loginbutton')[0];

function uC(word) {
    return word.toUpperCase();
}

go.addEventListener('click', function() {
    var cv = campus.value.toUpperCase();
    var tv = topic.value.toUpperCase();
    var dv = date.value.toUpperCase();
    if (cv == uC('georgia tech') || cv == uC('gt') || cv == uC('georgia institute of technology')) {
        s1.innerHTML = 'BLM Protest: Atlanta, GA, 01/20/2021';
        s2.innerHTML = 'Green New Deal March: Atlanta, GA, 11/18/2020';
        s3.innerHTML = 'Veganism Activists of Atlanta: Atlanta, GA, 03/01/2021';
        s4.innerHTML = 'Pride: Atlanta, GA, 06/03/2021';
    } else if (cv == uC('mit') || cv == uC('massachusetts institute of technology')) {
        s1.innerHTML = 'Protect Our Vote March: Cambridge, MA, 01/20/2021';
        s2.innerHTML = 'Through the Glass Ceiling Protest: Cambridge, MA, 11/18/2020';
        s3.innerHTML = 'UBI talks: Cambridge, MA, 03/01/2021';
        s4.innerHTML = 'Pride: Cambridge, MA, 06/03/2021';
    } else if (tv == uC('guns') || tv == uC('gun control') || tv == uC('gun')) {
        s1.innerHTML = 'Protect our Rights Walkout: Los Angeles, CA, 01/20/2021';
        s2.innerHTML = 'Protect our Children: Raleigh, NC, 10/18/2020';
        s3.innerHTML = '2nd Amendment, 1st Priority: Atlanta, GA, 03/01/2021';
        s4.innerHTML = 'Gun Reform March: Denver, CO, 06/03/2021';
    } else if (tv == uC('BLM') || tv == uC('Black Lives Matter')) {
        s1.innerHTML = 'BLM Protest: Atlanta, GA, 01/20/2021';
        s2.innerHTML = 'Justice for Breonna Taylor: Salt Lake City, UT, 11/18/2020';
        s3.innerHTML = 'BLM March for Justice: Chicago, IL, 03/01/2021';
        s4.innerHTML = 'Let us Speak: Detroit, MI, 06/03/2021';
    } else if (tv == uC('pride') || tv == uC('LGBT') || tv == uC('love')) {
        s1.innerHTML = 'March for Love: Irvine, CA, 01/20/2021';
        s2.innerHTML = 'LGBTQIA+ Pride: New York City, NY, 11/18/2020';
        s3.innerHTML = 'Pride: Cambridge, MA, 06/03/2021';
        s4.innerHTML = 'Pride: Atlanta, GA, 06/03/2021';
    } else if (dv == uC('09/12/2021')) {
        s1.innerHTML = 'Walk with Women: Atlanta, GA, 09/12/2021';
        s2.innerHTML = 'For our Teachers: Seattle, WA, 09/12/2021';
        s3.innerHTML = 'The Right to Vote: Augusta, GA, 09/12/2021';
        s4.innerHTML = 'No more cages: Austin, TX, 09/12/2021';
    } else if (dv == uC('01/01/2021')) {
        s1.innerHTML = 'A Better Year: Nashville, TN, 01/01/2021';
        s2.innerHTML = 'Clean Up for 2021: Columbus, OH, 01/01/2021';
        s3.innerHTML = 'No to the pipeline: Bismark, ND, 01/01/2021';
        s4.innerHTML = 'Protect American Businesses: Detroit, MI, 01/01/2021';
    } else {
        s1.innerHTML = 'couldn\'t find local protests';
    }
    campus.value = '';
    topic.value = '';
    date.value = '';
})