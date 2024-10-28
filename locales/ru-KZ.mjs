/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)))
        return 1;
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)))
        return 3;
    if (v === 0 && i % 10 === 0 || (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 5 && i % 10 <= 9)) || v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 11 && i % 100 <= 14))))
        return 4;
    return 5;
}
export default ["ru-KZ", [["AM", "PM"], u, u], u, [["В", "П", "В", "С", "Ч", "П", "С"], ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]], u, [["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]], [["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]], [["до н.э.", "н.э."], ["до н. э.", "н. э."], ["до Рождества Христова", "от Рождества Христова"]], 1, [6, 0], ["dd.MM.y", "d MMM y 'г'.", "d MMMM y 'г'.", "EEEE, d MMMM y 'г'."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, u, u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "не число", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "KZT", "₸", "казахский тенге", { "BYN": [u, "р."], "GEL": [u, "ლ"], "KZT": ["₸"], "PHP": [u, "₱"], "RON": [u, "L"], "RUB": ["₽"], "RUR": ["р."], "THB": ["฿"], "TMT": ["ТМТ"], "TWD": ["NT$"], "UAH": ["₴"], "XXX": ["XXXX"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUtS1ouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9ydS1LWi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRWpHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0csT0FBTyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzTCxPQUFPLENBQUMsQ0FBQztJQUNiLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMscUJBQXFCLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwodmFsOiBudW1iZXIpOiBudW1iZXIge1xuY29uc3QgbiA9IHZhbCwgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnModmFsKSksIHYgPSB2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcblxuaWYgKHYgPT09IDAgJiYgKGkgJSAxMCA9PT0gMSAmJiAhKGkgJSAxMDAgPT09IDExKSkpXG4gICAgcmV0dXJuIDE7XG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgKGkgJSAxMCA+PSAyICYmIGkgJSAxMCA8PSA0KSAmJiAhKGkgJSAxMDAgPj0gMTIgJiYgaSAlIDEwMCA8PSAxNCkpKVxuICAgIHJldHVybiAzO1xuaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSAwIHx8ICh2ID09PSAwICYmIChpICUgMTAgPT09IE1hdGguZmxvb3IoaSAlIDEwKSAmJiAoaSAlIDEwID49IDUgJiYgaSAlIDEwIDw9IDkpKSB8fCB2ID09PSAwICYmIChpICUgMTAwID09PSBNYXRoLmZsb29yKGkgJSAxMDApICYmIChpICUgMTAwID49IDExICYmIGkgJSAxMDAgPD0gMTQpKSkpXG4gICAgcmV0dXJuIDQ7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wicnUtS1pcIixbW1wiQU1cIixcIlBNXCJdLHUsdV0sdSxbW1wi0JJcIixcItCfXCIsXCLQklwiLFwi0KFcIixcItCnXCIsXCLQn1wiLFwi0KFcIl0sW1wi0LLRgVwiLFwi0L/QvVwiLFwi0LLRglwiLFwi0YHRgFwiLFwi0YfRglwiLFwi0L/RglwiLFwi0YHQsVwiXSxbXCLQstC+0YHQutGA0LXRgdC10L3RjNC1XCIsXCLQv9C+0L3QtdC00LXQu9GM0L3QuNC6XCIsXCLQstGC0L7RgNC90LjQulwiLFwi0YHRgNC10LTQsFwiLFwi0YfQtdGC0LLQtdGA0LNcIixcItC/0Y/RgtC90LjRhtCwXCIsXCLRgdGD0LHQsdC+0YLQsFwiXSxbXCLQstGBXCIsXCLQv9C9XCIsXCLQstGCXCIsXCLRgdGAXCIsXCLRh9GCXCIsXCLQv9GCXCIsXCLRgdCxXCJdXSx1LFtbXCLQr1wiLFwi0KRcIixcItCcXCIsXCLQkFwiLFwi0JxcIixcItCYXCIsXCLQmFwiLFwi0JBcIixcItChXCIsXCLQnlwiLFwi0J1cIixcItCUXCJdLFtcItGP0L3Qsi5cIixcItGE0LXQstGALlwiLFwi0LzQsNGALlwiLFwi0LDQv9GALlwiLFwi0LzQsNGPXCIsXCLQuNGO0L0uXCIsXCLQuNGO0LsuXCIsXCLQsNCy0LMuXCIsXCLRgdC10L3Rgi5cIixcItC+0LrRgi5cIixcItC90L7Rj9CxLlwiLFwi0LTQtdC6LlwiXSxbXCLRj9C90LLQsNGA0Y9cIixcItGE0LXQstGA0LDQu9GPXCIsXCLQvNCw0YDRgtCwXCIsXCLQsNC/0YDQtdC70Y9cIixcItC80LDRj1wiLFwi0LjRjtC90Y9cIixcItC40Y7Qu9GPXCIsXCLQsNCy0LPRg9GB0YLQsFwiLFwi0YHQtdC90YLRj9Cx0YDRj1wiLFwi0L7QutGC0Y/QsdGA0Y9cIixcItC90L7Rj9Cx0YDRj1wiLFwi0LTQtdC60LDQsdGA0Y9cIl1dLFtbXCLQr1wiLFwi0KRcIixcItCcXCIsXCLQkFwiLFwi0JxcIixcItCYXCIsXCLQmFwiLFwi0JBcIixcItChXCIsXCLQnlwiLFwi0J1cIixcItCUXCJdLFtcItGP0L3Qsi5cIixcItGE0LXQstGALlwiLFwi0LzQsNGA0YJcIixcItCw0L/RgC5cIixcItC80LDQuVwiLFwi0LjRjtC90YxcIixcItC40Y7Qu9GMXCIsXCLQsNCy0LMuXCIsXCLRgdC10L3Rgi5cIixcItC+0LrRgi5cIixcItC90L7Rj9CxLlwiLFwi0LTQtdC6LlwiXSxbXCLRj9C90LLQsNGA0YxcIixcItGE0LXQstGA0LDQu9GMXCIsXCLQvNCw0YDRglwiLFwi0LDQv9GA0LXQu9GMXCIsXCLQvNCw0LlcIixcItC40Y7QvdGMXCIsXCLQuNGO0LvRjFwiLFwi0LDQstCz0YPRgdGCXCIsXCLRgdC10L3RgtGP0LHRgNGMXCIsXCLQvtC60YLRj9Cx0YDRjFwiLFwi0L3QvtGP0LHRgNGMXCIsXCLQtNC10LrQsNCx0YDRjFwiXV0sW1tcItC00L4g0L0u0Y0uXCIsXCLQvS7RjS5cIl0sW1wi0LTQviDQvS4g0Y0uXCIsXCLQvS4g0Y0uXCJdLFtcItC00L4g0KDQvtC20LTQtdGB0YLQstCwINCl0YDQuNGB0YLQvtCy0LBcIixcItC+0YIg0KDQvtC20LTQtdGB0YLQstCwINCl0YDQuNGB0YLQvtCy0LBcIl1dLDEsWzYsMF0sW1wiZGQuTU0ueVwiLFwiZCBNTU0geSAn0LMnLlwiLFwiZCBNTU1NIHkgJ9CzJy5cIixcIkVFRUUsIGQgTU1NTSB5ICfQsycuXCJdLFtcIkhIOm1tXCIsXCJISDptbTpzc1wiLFwiSEg6bW06c3MgelwiLFwiSEg6bW06c3Mgenp6elwiXSxbXCJ7MX0sIHswfVwiLHUsdSx1XSxbXCIsXCIsXCLCoFwiLFwiO1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiRVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCLQvdC1wqDRh9C40YHQu9C+XCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzDCoCVcIixcIiMsIyMwLjAwwqDCpFwiLFwiI0UwXCJdLFwiS1pUXCIsXCLigrhcIixcItC60LDQt9Cw0YXRgdC60LjQuSDRgtC10L3Qs9C1XCIse1wiQllOXCI6W3UsXCLRgC5cIl0sXCJHRUxcIjpbdSxcIuGDmlwiXSxcIktaVFwiOltcIuKCuFwiXSxcIlBIUFwiOlt1LFwi4oKxXCJdLFwiUk9OXCI6W3UsXCJMXCJdLFwiUlVCXCI6W1wi4oK9XCJdLFwiUlVSXCI6W1wi0YAuXCJdLFwiVEhCXCI6W1wi4Li/XCJdLFwiVE1UXCI6W1wi0KLQnNCiXCJdLFwiVFdEXCI6W1wiTlQkXCJdLFwiVUFIXCI6W1wi4oK0XCJdLFwiWFhYXCI6W1wiWFhYWFwiXX0sXCJsdHJcIiwgcGx1cmFsXTtcbiJdfQ==