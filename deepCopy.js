var a = {
    name: "Johan-Pohan",
    age: 20,
    adress: {
        city: "Mozyr",
        street: "Prolet",
        building: 47
    }
}

var personOriginal = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: -37.3159,
        lng: 81.1496
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}

function deepCopy(obj) {
    var copiedObj = {};

    //Object.assign(copiedObj, obj);
    for (var i in obj) {
        if (typeof obj[i] == 'object') {
            copiedObj[i] = deepCopy(obj[i]);
        } else {
            copiedObj[i] = obj[i];
        }
    }

    return copiedObj;
}

var copied = deepCopy(personOriginal);
