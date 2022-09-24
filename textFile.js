<script>
    let winnerFile = new XMLHttpRequest();
    winnerFile.open("GET", "2021 Winner.json", false);
    winnerFile.onreadystatechange = () => {
        if(winnerFile.status === 200) {
            winner = JSON.parse(winnerFile.responseText);
            console.log(winner.name, winner.developer, winner.category, winner. institution);
        }
    }
    winnerFile.send(null);
</script>




