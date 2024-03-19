const nameInput = document.getElementById('name') as HTMLInputElement;
const ageInput   = document.getElementById('age') as HTMLInputElement;
const submitBtn  = document.getElementById('Submit') as HTMLButtonElement;

const result = document.getElementById('result') as HTMLDivElement;

submitBtn.addEventListener('click', () => {
//   console.log(nameInput.value, ageInput.value);
    result.innerHTML = getFullName(nameInput.value, ageInput.value);
})

const getFullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
}

function add(a: number, b: number): number {
    return a + b;
}