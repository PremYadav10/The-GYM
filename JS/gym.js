window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const closeBtn = document.querySelector('.sidebar .close-btn');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            navbar.classList.remove('hidden');
            navbar.classList.remove('transparent');
        } else if (currentScroll > lastScroll) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
            navbar.classList.add('transparent');
        }
        lastScroll = currentScroll;
    });

    menuIcon.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(0)';
    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(100%)';
    });
});

                                                        //for BMI


function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(1);
  
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Healthy Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
  
    document.getElementById('bmiValue').innerText = bmi;
    document.getElementById('bmiCategory').innerText = category;
  }


  //whatsapp
  function whatsapp(){
    let phoneNumber = "+919993444570";

    let Name = document.querySelector('#name').value;
    let Number = document.querySelector('#phone').value;
    let Email = document.querySelector('#email').value;
    let Message = document.querySelector('#message').value;

    let url = "https://wa.me/"+phoneNumber+"?text="
    +"*Inquary And Feedback Form Data*"+"%0a"
    +"*Name :* "+Name+"%0a"
    +"*Number :* "+Number+"%0a"
    +"*Email :* "+Email+"%0a"
    +"*Message :* "+Message+"%0a";

    window.open(url,'_blank').focus();
}