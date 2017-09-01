var title=document.getElementById('bookTitle');
var author=document.getElementById('bookAuthor');
var description=document.getElementById('bookDesc');
var pages=document.getElementById('bookPages')
var availability=document.getElementById('bookAvail')

function book(name,author,publisher,isbn) {
	this.name=name;
	this.author=author;
	this.publisher=publisher;
	this.isbn=isbn
	//this.description=description;
	//this.pages=pages;
	//this.availability=availability;
}

function createBook(x) {
	var newBookTable=document.getElementById('bookList')
	var row=newBookTable.insertRow(-1);
	var newTitle=row.insertCell(0)
	var newAuthor=row.insertCell(1)
	var newPublisher=row.insertCell(2)
	var newIsbn=row.insertCell(3)
	var newStatus=row.insertCell(4)
	var newLoan=row.insertCell(5)
	
	var newLoanButton=document.createElement('button')
	var text=document.createTextNode('Loan')
	newLoanButton.appendChild(text)
	newLoan.appendChild(newLoanButton)
	
	
	var inputTitle=document.getElementById('newTitle').value
	var inputAuthor=document.getElementById('newAuthor').value
	var inputPublisher=document.getElementById('newPublisher').value
	var inputIsbn=document.getElementById('newIsbn').value

	
	newTitle.innerHTML=document.getElementById('newTitle').value
	newAuthor.innerHTML=document.getElementById('newAuthor').value
	newPublisher.innerHTML=document.getElementById('newPublisher').value
	newIsbn.innerHTML=document.getElementById('newIsbn').value

	
	var x=new book(inputTitle,inputAuthor,inputPublisher,inputIsbn)
	console.log(x)
	
}

function loanBook() {
	var loanButton=document.getElementById('onLoan')
	var loanStatus=document.getElementById('bookStatus')
	//var loanDate=
	loanStatus.innerHTML=new Date()
}



var wakingGods = new book('Waking Gods','Sylvain Neuvel','',250,'')










//title.innerHTML=wakingGods.name
//author.innerHTML="by, " + wakingGods.author