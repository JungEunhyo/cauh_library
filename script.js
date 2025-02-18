// 책 데이터 (예, 더 추가할 것)
const books = [
    { "book_number": "812하", "shelf_number": 4 },
    { "book_number": "123가", "shelf_number": 1 },
    { "book_number": "456나", "shelf_number": 2 },
    { "book_number": "789다", "shelf_number": 5 }
];

// URL에서 책 번호 가져오기
const urlParams = new URLSearchParams(window.location.search);
const bookNumber = urlParams.get('book-number');

console.log('검색된 책 번호:', bookNumber); // 책 번호 제대로 받아졌는지 확인

// 책 번호로 책을 찾고 해당 책장의 번호 강조
function searchBookByNumber(bookNumber) {
    const book = books.find(b => b.book_number.toLowerCase().trim() === bookNumber.toLowerCase().trim());
    
    console.log('찾은 책:', book); // 찾은 책 객체 확인

    if (book) {
        // 책장 번호에 해당하는 책장 강조
        highlightShelf(book.shelf_number);
        document.getElementById('result-message').textContent = `책은 ${book.shelf_number}번 책장에 있습니다.`;
    } else {
        document.getElementById('result-message').textContent = '책을 찾을 수 없습니다.';
    }
}

// 책장 번호에 해당하는 책장 파랗게 표시
function highlightShelf(shelfNumber) {
    console.log('강조할 책장 번호:', shelfNumber); // 강조할 책장 번호 확인
    
    // 이전에 강조된 책장 번호 제거
    const allShelves = document.querySelectorAll('.shelf');
    allShelves.forEach(shelf => {
        shelf.classList.remove('highlight');
    });

    // 선택한 책장 번호 강조
    const selectedShelf = document.getElementById('shelf-' + shelfNumber);
    if (selectedShelf) {
        console.log('강조할 책장 찾음:', selectedShelf); // 강조할 책장 제대로 찾았는지 확인
        selectedShelf.classList.add('highlight');
    } else {
        console.log('위치를 찾을 수 없습니다. ID:', 'shelf-' + shelfNumber); // 찾을 수 없는 책장
    }
}

// 책 번호 검색
if (bookNumber) {
    searchBookByNumber(bookNumber);
} else {
    document.getElementById('result-message').textContent = '검색된 책 번호가 없습니다.';
}
