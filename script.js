// Games sayfasındaki butonlara tıklama işlemi için fonksiyon
function goToGame(game) {
    switch(game) {
        case 'snake':
            window.location.href = 'snake.html';  // Yılan oyunu sayfasına yönlendir
            break;
        case 'digipet':
            window.location.href = 'digipet.html';  // Sanal hayvan sayfasına yönlendir
            break;
        case 'chess':
            window.location.href = 'chess.html';  // Satranç sayfasına yönlendir
            break;
        case 'pingpong':
            window.location.href = 'pingpong.html';  // Pinpon sayfasına yönlendir
            break;
        default:
            alert('Geçersiz oyun!');
    }
}

// Hikaye ilerleme fonksiyonu (nextPart fonksiyonu hikaye metnini değiştirebilir)
function nextPart() {
    alert("Hikayenin yeni bölümü başlıyor!");
    // Burada hikaye bölümünü değiştirebilirsiniz.
    document.querySelector('.story p').textContent = "Yeni hikaye bölümü...";
}