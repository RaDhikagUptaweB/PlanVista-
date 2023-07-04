console.log('Welcome to Notes');
showNotes();
// If user Adds a note add it to a local storage
 let addNote=document.getElementById('submit');
 addNote.addEventListener("click",function(e){
    let addtxt=document.getElementById("note-input");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes)
    }
    noteObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addtxt.value="";
    showNotes();
 })
 function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes)
    }
    let  html="";
    noteObj.forEach(function(element,index){
        html+=`
        <div class="note-list" >
            
            <h4>Note ${index+1}</h4><hr>
            <p>${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn" >Delete</button>
            

        </div> 
        `;
    });
    let notesElm=document.getElementById('notes');
    if( noteObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothig to show`
    }
 }

 function deleteNote(index){
   // console.log("Deleting note", index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes)
    }
    noteObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();
 }


