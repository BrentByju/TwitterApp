function addUser(){
    var Username = document.getElementById('Input').value;

    localStorage.setItem('PlayerName', Username);
    window.location = 'Kwitter_room.html';
}