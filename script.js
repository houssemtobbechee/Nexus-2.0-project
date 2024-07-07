document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    let currentlyOpenParagraph = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.card');
            const paragraph = card.querySelector('.paragraph');

            if (paragraph.classList.contains('hide') || !paragraph.classList.contains('show')) {
                if (currentlyOpenParagraph && currentlyOpenParagraph !== paragraph) {
                    currentlyOpenParagraph.classList.remove('show');
                    currentlyOpenParagraph.classList.add('hide');
                }
                paragraph.classList.remove('hide');
                paragraph.classList.add('show');
                currentlyOpenParagraph = paragraph;
            } else {
                paragraph.classList.remove('show');
                paragraph.classList.add('hide');
                currentlyOpenParagraph = null;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = scrollLink.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
