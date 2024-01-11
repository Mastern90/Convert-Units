  const convertBtn = document.getElementById('convert-btn')
  const input = document.getElementById('input')

  const length_m_ft = document.getElementById('length_m_ft')
  const length_cm_in = document.getElementById('length_in_cm')

  const volume_gl_lt = document.getElementById('volume_gl_lt')
  const volume_cp_ou = document.getElementById('volume_ou_cp')

  const mass_kg_lb = document.getElementById('mass_kg_lb')
  const mass_g_mg = document.getElementById('mass_g_mg')


convertBtn.addEventListener('click', function() {
  let sum_m_ft = input.value * 3.28084
  let sum_ft_m = input.value * 0.30448
  let sum_cm_in = input.value / 2.54
  let sum_in_cm = input.value * 2.54

  let sum_lt_gl = input.value * 0.264172
  let sum_gl_lt = input.value * 3.78541
  let sum_cp_ou = input.value * 8.11537
  let sum_ou_cp = input.value / 8.11537


  let sum_kg_lb = input.value * 2.20462
  let sum_lb_kg = input.value * 0.453592
  let sum_g_mg = input.value * 1000
  let sum_mg_g = input.value / 1000

  length_m_ft.value = `${input.value} meters = ${sum_m_ft.toFixed(3)} feet | ${input.value} feet = ${sum_ft_m.toFixed(3)} meters`
  length_in_cm.value = `${input.value} inches = ${sum_cm_in.toFixed(3)} centimeters | ${input.value} centimeters = ${sum_in_cm} inches`

  volume_gl_lt.value = `${input.value} gallons = ${sum_gl_lt.toFixed(3)} liters | ${input.value} liters = ${sum_lt_gl.toFixed(3)} gallons`
  volume_cp_ou.value = `${input.value} cups = ${sum_cp_ou.toFixed(3)} ounces | ${input.value} ounces = ${sum_ou_cp.toFixed(3)} cups`

  mass_kg_lb.value = `${input.value} pounds ${sum_kg_lb.toFixed(3)} kilos | ${input.value} kilos = ${sum_lb_kg.toFixed(3)} pounds`
  mass_g_mg.value = `${input.value} grams = ${sum_g_mg} milligrams | ${input.value} milligrams = ${sum_mg_g.toFixed(3)} grams`
})

 