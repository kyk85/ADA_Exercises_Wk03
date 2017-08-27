var title=document.getElementById('bookTitle');
var author=document.getElementById('bookAuthor');
var description=document.getElementById('bookDesc');
var pages=document.getElementById('bookPages')
var availability=document.getElementById('bookAvail')

function book(name,author,description,pages,availability) {
	this.name=name;
	this.author=author;
	this.description;
	this.pages=pages;
	this.availability=availability;
}


var wakingGods = new book('Waking Gods','Sylvain Neuvel','',250,'')
title.innerHTML=wakingGods.name
author.innerHTML="by, " + wakingGods.author