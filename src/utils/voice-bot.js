export async function playAudioSequence(fileNames) {
  for (const fileName of fileNames) {
    await playSingleAudio(`/Voice/${fileName}.wav`);
  }
}
  
function playSingleAudio(src) {
  return new Promise((resolve) => {
    const audio = new Audio(src);
    audio.play();
    audio.onended = resolve;
    audio.onerror = resolve; // Пропускаем, если ошибка
  });
}

export function sequenceByLocalization (lang, ticketNumber, windowNumber) {
  const upperCaseLang = lang.toUpperCase();
  let list = [];
  switch (lang) {
    case 'ru':
      list.push(`01_NUM_${upperCaseLang}`);
      numberSequence(lang, ticketNumber, list);
      list.push(`02_NUM_${upperCaseLang}`);
      numberSequence(lang, windowNumber, list);
      break;
    case 'kz':
      numberSequence(lang, ticketNumber, list);
      numberSequence(lang, windowNumber, list);
      list.push(`03_NUM_${upperCaseLang}_tereze`);
      break;
    // case 'en':

  }
  return list;
}

function decomposeNumber(number) {
  if (number < 0 || number > 999) {
    throw new Error("Number must be between 0 and 999");
  }

  const s = number.toString().padStart(3, '0');
  const hundreds = parseInt(s[0], 10);
  const tens = parseInt(s[1], 10);
  const units = parseInt(s[2], 10);
  const lastTwo = parseInt(s.slice(1), 10);

  return { hundreds, tens, units, lastTwo };
}

function numberSequence (lang, number, list) {
  const { hundreds, tens, units, lastTwo } = decomposeNumber(number);
  const upperCaseLang = lang.toUpperCase();
  switch (lang) {
    case 'ru':
      if (hundreds !== 0)
        list.push(`${hundreds}00_${upperCaseLang}`);
      if (lastTwo > 9 && lastTwo < 20) {
        list.push(`${lastTwo}_${upperCaseLang}`);
      } else {
        if (tens !== 0)
          list.push(`${tens}0_${upperCaseLang}`);
        if (units !== 0)
          list.push(`${units}_${upperCaseLang}`);
      }
      break;
    case 'kz':
      if (hundreds !== 0)
        list.push(`${upperCaseLang}_${hundreds}00`);
      if (tens !== 0)
        list.push(`${upperCaseLang}_${tens}0`);
      if (units !== 0)
        list.push(`${upperCaseLang}_${units}`);
      break;
    // case 'en':

    //   break;
  }
}