"use client"
/**
 * This function return an Object with numbers and strings of a Date
 * @param {String} date string of a date
 * @returns Object: {day,weekday, month, year, weekdaysEs, monthEs, MonthEn, NewsMonthEs}
 */
export default function GetDate(date) {
  const strDate = date
  const day = strDate.getDate()
  const weekday = strDate.getDay()
  const month = strDate.getMonth()
  const year = strDate.getFullYear()

  const weekdaysEs = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    7: 'Domingo',
  }

  const weekdaysEs_start0 = {
    0: 'Lunes',
    1: 'Martes',
    2: 'Miércoles',
    3: 'Jueves',
    4: 'Viernes',
    5: 'Sábado',
    6: 'Domingo',
  }

  const monthEs = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  }

  const monthEn = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  return {
    day: day,
    weekday: weekday,
    month: month,
    year: year,
    weekdayEs: weekdaysEs[weekday],
    weekdaysEs_start0: weekdaysEs_start0[weekday],
    monthEs: monthEs[month],
    monthEn: monthEn[month],
    nextMonthEs: monthEs[month + 1]
  }
}
