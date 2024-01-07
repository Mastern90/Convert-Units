  const convertBtn = document.getElementById('convert-btn')
  const input = document.getElementById('input')
  const length = document.getElementById('length')
  const volume = document.getElementById('volume')
  const mass = document.getElementById('mass')


convertBtn.addEventListener('click', function() {
  let sumL = input.value * 3.28084
  let sum_L = input.value * 0.30448
  let sumV = input.value * 0.264172
  let sum_V = input.value * 3.78541
  let sumM = input.value * 2.20462
  let sum_M = input.value * 0.453592
  length.value = `${input.value} meters = ${sumL.toFixed(3)} feet | ${input.value} feet = ${sum_L.toFixed(3)} meters`
  volume.value = `${input.value} liters ${sumV.toFixed(3)} gallons | ${input.value} gallons = ${sum_V.toFixed(3)} liters`
  mass.value = `${input.value} pounds ${sumM.toFixed(3)} kilos | ${input.value} kilos = ${sum_M.toFixed(3)} pounds`
})

 