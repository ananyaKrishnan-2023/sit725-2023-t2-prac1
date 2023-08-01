function ch_text()
{
    // define list of potential text
    let num_list= ['Num_1','Num_2','Num_3','Num_4','Num_5','Num_6','Num_7','Num_8'];
    // generate a random number  within num_list array
    let ran_num= getRan_Num(0, num_list.length - 1);
    // select a random text from the num_list array
    let numChangedTo = num_list[ran_num];
    // change the text in the header
    document.getElementById('header').innerHTML = numChangedTo;


}

function getRan_Num(minimum,maximum)
{
    return Math.floor(Math.random()*(maximum - minimum + 1)+ minimum) ;
}