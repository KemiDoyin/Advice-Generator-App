const slipId = document.getElementById('slip__id');
const adviceSlip = document.getElementById('advice__slip');
const dice = document.querySelector('.dice');
const APIURL = 'https://api.adviceslip.com/advice'



dice.addEventListener('click', async () => {
    try {
        const res = await axios.get(APIURL)
        adviceSlip.textContent =
        res.data.slip.advice
        slipId.textContent = `#${res.data.slip.id}`
        console.log(res.data)
        console.log(res.data.slip)
    }
    catch(err) {
        console.log(err)
    }
})