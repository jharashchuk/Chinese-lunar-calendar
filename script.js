// Восточный календарь:
// - спрашивать у пользователя посредством promt какой год
// - и отвечать ему в alert, что это год обезьяны / собаки / крысы и т.д. (1 из 12 вариантов)

let year = +prompt('Введите год рождения', '');
let info;

switch (year % 12) {
    case 0:  
        info = 'Обезьяна';
        break; 
    case 1:  
        info = 'Петух';
        break; 
    case 2:   
        info = 'Собака';
        break;
    case 3: 
        info = 'Свинья';
        break;
    case 4:    
        info = 'Крыса';
        break;
    case 5:    
        info = 'Бык';
        break;
    case 6:   
        info = 'Тигр';
        break;
    case 7:  
        info = 'Кролик';
        break;
    case 8:   
        info = 'Дракон';
        break;
    case 9:    
        info = 'Змея';
        break;
    case 10:   
        info = 'Лошадь';
        break;
    case 11:  
        info = 'Коза';
        break;    
}

alert('Ваш знак восточного гороскопа: ' + info);
