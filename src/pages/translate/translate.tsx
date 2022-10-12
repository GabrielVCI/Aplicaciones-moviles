import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonMenuButton, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { useState } from 'react';

const Translate: React.FC = () => {

    const [text, setText] = useState<string>();
    let [input, setNumber] = useState<string>('');
   

    var objetoDeLaTraduccion = {

        //1 - 100
        1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 
        6: "seis", 7: "siete", 8: "ocho", 9: "nueve", 10: "diez",

        11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 
        16: "dieciseis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve", 20: "veinte",

        21: "veintiuno", 22: "veintidos", 23: "veintitres", 24: "veinticuatro", 25: "veinticinco", 
        26: "veintiseis", 27: "veintisiete", 28: "vientiocho", 29: "vientinueve", 30: "treinta",

        31: "treinta", 32: "treinta y dos", 33: "treinta y tres", 34: "treinta y cuatro", 35: "treinta y cinco", 
        36: "treinta y seis", 37: "treinta siete", 38: "treinta y ocho", 39: "treinta y nueve", 40: "cuarenta",

        41: "cuarenta y uno", 42: "cuarenta y dos", 43: "cuarenta y tres", 44: "cuarenta y cuatro", 45: "cuarenta y cinco", 
        46: "cuarenta y seis", 47: "cuarenta y siete", 48: "cuarenta y ocho", 49: "cuarenta y nueve", 50: "cincuenta",

        51: "cincuenta y uno", 52: "cincuenta y dos", 53: "cincuenta y tres", 54: "cincuenta y cuatro", 55: "cincuenta y cinco", 
        56: "cincuenta y seis", 57: "cincuenta y siete", 58: "cincuenta y ocho", 59: "cincuenta y nueve", 60: "sesenta",

        61: "sesenta y uno", 62: "sesenta y dos", 63: "sesenta y tres", 64: "sesenta y cuatro", 65: "sesenta y cinco", 
        66: "sesenta y seis", 67: "sesenta y siete", 68: "sesenta y ocho", 69: "sesenta y nueve", 70: "setenta",

        71: "setenta y uno", 72: "setenta y dos", 73: "setenta y tres", 74: "setenta y cuatro", 75: "setenta y cinco", 
        76: "setenta y seis", 77: "setenta y siete", 78: "setenta y ocho", 79: "setenta y nueve", 80: "ochenta",

        81: "ochenta y uno", 82: "ochenta y dos", 83: "ochenta y tres", 84: "ochenta y cuatro", 85: "ochenta y cinco", 
        86: "ochenta y seis", 87: "ochenta y siete", 88: "ochenta y ocho", 89: "ochenta y nueve", 90: "noventa",

        91: "noventa y uno", 92: "noventa y dos", 93: "noventa y tres", 94: "noventa y cuatro", 95: "noventa y cinco", 
        96: "noventa y seis", 97: "noventa y siete", 98: "noventa y ocho", 99: "noventa y nueve", 100: "cien",

        //101- 200
        101: "ciento uno", 102: "ciento dos", 103: "ciento tres", 104: "ciento cuatro", 105: "ciento cinco", 
        106: "ciento seis", 107: "ciento siete", 108: "ciento ocho", 109: "ciento nueve", 110: "ciento diez",

        111: "ciento once", 112: "ciento doce", 113: "ciento trece", 114: "ciento catorce", 115: "ciento quince", 
        116: "ciento dieciseis", 117: "ciento diecisiete", 118: "ciento dieciocho", 119: "ciento diecinueve", 120: "ciento veinte",

        121: "ciento veintiuno", 122: "ciento veintidos", 123: "ciento veintitres", 124: "ciento veinticuatro", 125: "ciento veinticinco", 
        126: "ciento veintiseis", 127: "ciento veintisiete", 128: "ciento vientiocho", 129: "ciento vientinueve", 130: "ciento treinta",

        131: "ciento treinta", 132: "ciento treinta y dos", 133: "ciento treinta y tres", 134: "ciento treinta y cuatro", 135: "ciento treinta y cinco", 
        136: "ciento treinta y seis", 137: "ciento treinta siete", 138: "ciento treinta y ocho", 139: "ciento treinta y nueve", 140: "ciento cuarenta",

        141: "ciento cuarenta y uno", 142: "ciento cuarenta y dos", 143: "ciento cuarenta y tres", 144: "ciento cuarenta y cuatro", 145: "ciento cuarenta y cinco", 
        146: "ciento cuarenta y seis", 147: "ciento cuarenta y siete", 148: "ciento cuarenta y ocho", 149: "ciento cuarenta y nueve", 150: "ciento cincuenta",

        151: "ciento cincuenta y uno", 152: "ciento cincuenta y dos", 153: "ciento cincuenta y tres", 154: "ciento cincuenta y cuatro", 155: "ciento cincuenta y cinco", 
        156: "ciento cincuenta y seis", 157: "ciento cincuenta y siete", 158: "ciento cincuenta y ocho", 159: "ciento cincuenta y nueve", 160: "ciento sesenta",

        161: "ciento sesenta y uno", 162: "ciento sesenta y dos", 163: "ciento sesenta y tres", 164: "ciento sesenta y cuatro", 165: "ciento sesenta y cinco", 
        166: "ciento sesenta y seis", 167: "ciento sesenta y siete", 168: "ciento sesenta y ocho", 169: "ciento sesenta y nueve", 170: "ciento setenta",

        171: "ciento setenta y uno", 172: "ciento setenta y dos", 173: "ciento setenta y tres", 174: "ciento setenta y cuatro", 175: "ciento setenta y cinco", 
        176: "ciento setenta y seis", 177: "ciento setenta y siete", 178: "ciento setenta y ocho", 179: "ciento setenta y nueve", 180: "ciento ochenta",

        181: "ciento ochenta y uno", 182: "ciento ochenta y dos", 183: "ciento ochenta y tres", 184: "ciento ochenta y cuatro", 185: "ciento ochenta y cinco", 
        186: "ciento ochenta y seis", 187: "ciento ochenta y siete", 188: "ciento ochenta y ocho", 189: "ciento ochenta y nueve", 190: "ciento noventa",

        191: "ciento noventa y uno", 192: "ciento noventa y dos", 193: "ciento noventa y tres", 194: "ciento noventa y cuatro", 195: "ciento noventa y cinco", 
        196: "ciento noventa y seis", 197: "ciento noventa y siete", 198: "ciento noventa y ocho", 199: "ciento noventa y nueve", 200: "doscientos",

        //201 - 300
        201: "doscientos uno", 202: "doscientos dos", 203: "doscientos tres", 204: "doscientos cuatro", 205: "doscientos cinco", 
        206: "doscientos seis", 207: "doscientos siete", 208: "doscientos doscientos", 209: "doscientos nueve", 210: "doscientos diez",

        211: "doscientos once", 212: "doscientos doce", 213: "doscientos trece", 214: "doscientos catorce", 215: "doscientos quince", 
        216: "doscientos dieciseis", 217: "doscientos diecisiete", 218: "doscientos dieciocho", 219: "doscientos diecinueve", 220: "doscientos veinte",

        221: "doscientos veintiuno", 222: "doscientos veintidos", 223: "doscientos veintitres", 224: "doscientos veinticuatro", 225: "doscientos veinticinco", 
        226: "doscientos veintiseis", 227: "doscientos veintisiete", 228: "doscientos vientiocho", 229: "doscientos vientinueve", 230: "doscientos treinta",

        231: "doscientos treinta", 232: "doscientos treinta y dos", 233: "doscientos treinta y tres", 234: "doscientos treinta y cuatro", 235: "doscientos treinta y cinco", 
        236: "doscientos treinta y seis", 237: "doscientos treinta siete", 238: "doscientos treinta y ocho", 239: "doscientos treinta y nueve", 240: "doscientos cuarenta",

        241: "doscientos cuarenta y uno", 242: "doscientos cuarenta y dos", 243: "doscientos cuarenta y tres", 244: "doscientos cuarenta y cuatro", 245: "doscientos cuarenta y cinco", 
        246: "doscientos cuarenta y seis", 247: "doscientos cuarenta y siete", 248: "doscientos cuarenta y ocho", 249: "doscientos cuarenta y nueve", 250: "doscientos cincuenta",

        251: "doscientos cincuenta y uno", 252: "doscientos cincuenta y dos", 253: "doscientos cincuenta y tres", 254: "doscientos cincuenta y cuatro", 255: "doscientos cincuenta y cinco", 
        256: "doscientos cincuenta y seis", 257: "doscientos cincuenta y siete", 258: "doscientos cincuenta y ocho", 259: "doscientos cincuenta y nueve", 260: "doscientos sesenta",

        261: "doscientos sesenta y uno", 262: "doscientos sesenta y dos", 263: "doscientos sesenta y tres", 264: "doscientos sesenta y cuatro", 265: "doscientos sesenta y cinco", 
        266: "doscientos sesenta y seis", 267: "doscientos sesenta y siete", 268: "doscientos sesenta y ocho", 269: "doscientos sesenta y nueve", 270: "doscientos setenta",

        271: "doscientos setenta y uno", 272: "doscientos setenta y dos", 273: "doscientos setenta y tres", 274: "doscientos setenta y cuatro", 275: "doscientos setenta y cinco", 
        276: "doscientos setenta y seis", 277: "doscientos setenta y siete", 278: "doscientos setenta y ocho", 279: "doscientos setenta y nueve", 280: "doscientos ochenta",

        281: "doscientos ochenta y uno", 282: "doscientos ochenta y dos", 283: "doscientos ochenta y tres", 284: "doscientos ochenta y cuatro", 285: "doscientos ochenta y cinco", 
        286: "doscientos ochenta y seis", 287: "doscientos ochenta y siete", 288: "doscientos ochenta y ocho", 289: "doscientos ochenta y nueve", 290: "doscientos noventa",

        291: "doscientos noventa y uno", 292: "doscientos noventa y dos", 293: "doscientos noventa y tres", 294: "doscientos noventa y cuatro", 295: "doscientos noventa y cinco", 
        296: "doscientos noventa y seis", 297: "doscientos noventa y siete", 298: "doscientos noventa y ocho", 299: "doscientos noventa y nueve", 300: "trescientos",

        //301 - 400
        301: "trescientos uno", 302: "trescientos dos", 303: "trescientos tres", 304: "trescientos cuatro", 305: "trescientos cinco", 
        306: "trescientos seis", 307: "trescientos siete", 308: "trescientos ocho", 309: "trescientos nueve", 310: "trescientos diez",

        311: "trescientos once", 312: "trescientos doce", 313: "trescientos trece", 314: "trescientos catorce", 315: "trescientos quince", 
        316: "trescientos dieciseis", 317: "trescientos diecisiete", 318: "trescientos dieciocho", 319: "trescientos diecinueve", 320: "trescientos veinte",

        321: "trescientos veintiuno", 322: "trescientos veintidos", 323: "trescientos veintitres", 324: "trescientos veinticuatro", 325: "trescientos veinticinco", 
        326: "trescientos veintiseis", 327: "trescientos veintisiete", 328: "trescientos vientiocho", 329: "trescientos vientinueve", 330: "trescientos treinta",

        331: "trescientos treinta", 332: "trescientos treinta y dos", 333: "trescientos treinta y tres", 334: "trescientos treinta y cuatro", 335: "trescientos treinta y cinco", 
        336: "trescientos treinta y seis", 337: "trescientos treinta siete", 338: "trescientos treinta y ocho", 339: "trescientos treinta y nueve", 340: "trescientos cuarenta",

        341: "trescientos cuarenta y uno", 342: "trescientos cuarenta y dos", 343: "trescientos cuarenta y tres", 344: "trescientos cuarenta y cuatro", 345: "trescientos cuarenta y cinco", 
        346: "trescientos cuarenta y seis", 347: "trescientos cuarenta y siete", 348: "trescientos cuarenta y ocho", 349: "trescientos cuarenta y nueve", 350: "trescientos cincuenta",

        351: "trescientos cincuenta y uno", 352: "trescientos cincuenta y dos", 353: "trescientos cincuenta y tres", 354: "trescientos cincuenta y cuatro", 355: "trescientos cincuenta y cinco", 
        356: "trescientos cincuenta y seis", 357: "trescientos cincuenta y siete", 358: "trescientos cincuenta y ocho", 359: "trescientos cincuenta y nueve", 360: "trescientos sesenta",

        361: "trescientos sesenta y uno", 362: "trescientos sesenta y dos", 363: "trescientos sesenta y tres", 364: "trescientos sesenta y cuatro", 365: "trescientos sesenta y cinco", 
        366: "trescientos sesenta y seis", 367: "trescientos sesenta y siete", 368: "trescientos sesenta y ocho", 369: "trescientos sesenta y nueve", 370: "trescientos setenta",

        371: "trescientos setenta y uno", 372: "trescientos setenta y dos", 373: "trescientos setenta y tres", 374: "trescientos setenta y cuatro", 375: "trescientos setenta y cinco", 
        376: "trescientos setenta y seis", 377: "trescientos setenta y siete", 378: "trescientos setenta y ocho",379: "trescientos setenta y nueve", 380: "trescientos ochenta",

        381: "trescientos ochenta y uno", 382: "trescientos ochenta y dos", 383: "trescientos ochenta y tres", 384: "trescientos ochenta y cuatro", 385: "trescientos ochenta y cinco", 
        386: "trescientos ochenta y seis", 387: "trescientos ochenta y siete", 388: "trescientos ochenta y ocho", 389: "trescientos ochenta y nueve", 390: "trescientos noventa",

        391: "trescientos noventa y uno", 392: "trescientos noventa y dos", 393: "trescientos noventa y tres", 394: "trescientos noventa y cuatro", 395: "trescientos noventa y cinco", 
        396: "trescientos noventa y seis", 397: "trescientos noventa y siete", 398: "trescientos noventa y ocho", 399: "trescientos noventa y nueve", 400: "cuatrocientos",

        //401 - 500
        401: "cuatrocientos uno", 402: "cuatrocientos dos", 403: "cuatrocientos tres", 404: "cuatrocientos cuatro", 405: "cuatrocientos cinco", 
        406: "cuatrocientos seis", 407: "cuatrocientos siete", 408: "cuatrocientos ocho", 409: "cuatrocientos nueve", 410: "cuatrocientos diez",

        411: "cuatrocientos once", 412: "cuatrocientos doce", 413: "cuatrocientos trece", 414: "cuatrocientos catorce", 415: "cuatrocientos quince", 
        416: "cuatrocientos dieciseis", 417: "cuatrocientos diecisiete", 418: "cuatrocientos dieciocho", 419: "cuatrocientos diecinueve", 420: "cuatrocientos veinte",

        421: "cuatrocientos veintiuno", 422: "cuatrocientos veintidos", 423: "cuatrocientos veintitres", 424: "cuatrocientos veinticuatro", 425: "cuatrocientos veinticinco", 
        426: "cuatrocientos veintiseis", 427: "cuatrocientos veintisiete", 428: "cuatrocientos vientiocho", 429: "cuatrocientos vientinueve", 430: "cuatrocientos treinta",

        431: "cuatrocientos treinta", 432: "cuatrocientos treinta y dos", 433: "cuatrocientos treinta y tres", 434: "cuatrocientos treinta y cuatro", 435: "cuatrocientos treinta y cinco", 
        436: "cuatrocientos treinta y seis", 437: "cuatrocientos treinta siete", 438: "cuatrocientos treinta y ocho", 439: "cuatrocientos treinta y nueve", 440: "cuatrocientos cuarenta",

        441: "cuatrocientos cuarenta y uno", 442: "cuatrocientos cuarenta y dos", 443: "cuatrocientos cuarenta y tres", 444: "cuatrocientos cuarenta y cuatro", 445: "cuatrocientos cuarenta y cinco", 
        446: "cuatrocientos cuarenta y seis", 447: "cuatrocientos cuarenta y siete", 448: "cuatrocientos cuarenta y ocho", 449: "cuatrocientos cuarenta y nueve", 450: "cuatrocientos cincuenta",

        451: "cuatrocientos cincuenta y uno", 452: "cuatrocientos cincuenta y dos", 453: "cuatrocientos cincuenta y tres", 454: "cuatrocientos cincuenta y cuatro", 455: "cuatrocientos cincuenta y cinco", 
        456: "cuatrocientos cincuenta y seis", 457: "cuatrocientos cincuenta y siete", 458: "cuatrocientos cincuenta y ocho", 459: "cuatrocientos cincuenta y nueve", 460: "cuatrocientos sesenta",

        461: "cuatrocientos sesenta y uno", 462: "cuatrocientos sesenta y dos", 463: "cuatrocientos sesenta y tres", 464: "cuatrocientos sesenta y cuatro", 465: "cuatrocientos sesenta y cinco", 
        466: "cuatrocientos sesenta y seis", 467: "cuatrocientos sesenta y siete", 468: "cuatrocientos sesenta y ocho", 469: "cuatrocientos sesenta y nueve", 470: "cuatrocientos setenta",

        471: "quinientos setenta y uno",472: "quinientos setenta y dos", 473: "quinientos setenta y tres", 474: "quinientos setenta y cuatro", 475: "quinientos setenta y cinco", 
        476: "quinientos setenta y seis", 477: "quinientos setenta y siete", 478: "quinientos setenta y ocho",479: "quinientos setenta y nueve", 480: "quinientos ochenta",

        481: "cuatrocientos ochenta y uno", 482: "cuatrocientos ochenta y dos", 483: "cuatrocientos ochenta y tres", 484: "cuatrocientos ochenta y cuatro", 485: "cuatrocientos ochenta y cinco", 
        486: "cuatrocientos ochenta y seis", 487: "cuatrocientos ochenta y siete", 488: "cuatrocientos ochenta y ocho", 489: "cuatrocientos ochenta y nueve", 490: "cuatrocientos noventa",

        491: "cuatrocientos noventa y uno", 492: "cuatrocientos noventa y dos", 493: "cuatrocientos noventa y tres", 494: "cuatrocientos noventa y cuatro", 495: "cuatrocientos noventa y cinco", 
        496: "cuatrocientos noventa y seis", 497: "cuatrocientos noventa y siete", 498: "cuatrocientos noventa y ocho", 499: "cuatrocientos noventa y nueve", 500: "quinientos",

        //501- 600
        501: "quinientos uno", 502: "quinientos dos", 503: "quinientos tres", 504: "quinientos cuatro", 505: "quinientos cinco", 
        506: "quinientos seis", 507: "quinientos siete", 508: "quinientos ocho", 509: "quinientos nueve", 510: "quinientos diez",

        511: "quinientos once", 512: "quinientos doce", 513: "quinientos trece", 514: "quinientos catorce", 515: "quinientos quince", 
        516: "quinientos dieciseis", 517: "quinientos diecisiete", 518: "quinientos dieciocho", 519: "quinientos diecinueve", 520: "quinientos veinte",

        521: "quinientos veintiuno", 522: "quinientos veintidos", 523: "quinientos veintitres", 524: "quinientos veinticuatro", 525: "quinientos veinticinco", 
        526: "quinientos veintiseis", 527: "quinientos veintisiete", 528: "quinientos vientiocho", 529: "quinientos vientinueve", 530: "quinientos treinta",

        531: "quinientos treinta", 532: "quinientos treinta y dos", 533: "quinientos treinta y tres", 534: "quinientos treinta y cuatro", 535: "quinientos treinta y cinco", 
        536: "quinientos treinta y seis", 537: "quinientos treinta siete", 538: "quinientos treinta y ocho", 539: "quinientos treinta y nueve", 540: "ciento cuarenta",

        541: "quinientos cuarenta y uno",542: "quinientos cuarenta y dos", 543: "quinientos cuarenta y tres", 544: "quinientos cuarenta y cuatro", 545: "quinientos cuarenta y cinco", 
        546: "quinientos cuarenta y seis", 547: "quinientos cuarenta y siete", 548: "quinientos cuarenta y ocho", 549: "quinientos cuarenta y nueve", 550: "quinientos cincuenta",

        551: "quinientos cincuenta y uno", 552: "quinientos cincuenta y dos", 553: "quinientos cincuenta y tres", 554: "quinientos cincuenta y cuatro", 555: "quinientos cincuenta y cinco", 
        556: "quinientos cincuenta y seis", 557: "quinientos cincuenta y siete", 558: "quinientos cincuenta y ocho", 559: "quinientos cincuenta y nueve", 560: "quinientos sesenta",

        561: "quinientos sesenta y uno", 562: "quinientos sesenta y dos", 563: "quinientos sesenta y tres", 564: "quinientos sesenta y cuatro", 565: "quinientos sesenta y cinco", 
        566: "quinientos sesenta y seis", 567: "quinientos sesenta y siete", 568: "quinientos sesenta y ocho", 569: "quinientos sesenta y nueve", 570: "quinientos setenta",

        571: "quinientos setenta y uno", 572: "quinientos setenta y dos", 573: "quinientos setenta y tres", 574: "quinientos setenta y cuatro", 575: "quinientos setenta y cinco", 
        576: "quinientos setenta y seis", 577: "quinientos setenta y siete", 578: "quinientos setenta y ocho", 579: "quinientos setenta y nueve", 580: "quinientos ochenta",

        581: "quinientos ochenta y uno", 582: "quinientos ochenta y dos", 583: "quinientos ochenta y tres", 584: "quinientos ochenta y cuatro",585: "quinientos ochenta y cinco", 
        586: "quinientos ochenta y seis", 587: "quinientos ochenta y siete", 588: "quinientos ochenta y ocho", 589: "quinientos ochenta y nueve", 590: "quinientos noventa",

        591: "quinientos noventa y uno", 592: "quinientos noventa y dos", 593: "quinientos noventa y tres", 594: "quinientos noventa y cuatro", 595: "quinientos noventa y cinco", 
        596: "quinientos noventa y seis", 597: "quinientos noventa y siete", 598: "quinientos noventa y ocho", 599: "quinientos noventa y nueve", 600: "seiscientos",

        //601 - 700
        601: "seiscientos uno", 602: "seiscientos dos", 603: "seiscientos tres", 604: "seiscientos cuatro", 605: "seiscientos cinco", 
        606: "seiscientos seis", 607: "seiscientos siete", 608: "seiscientos doscientos", 609: "seiscientos nueve", 610: "seiscientos diez",

        611: "seiscientos once", 612: "seiscientos doce", 613: "seiscientos trece", 614: "seiscientos catorce", 615: "doscientos quince", 
        616: "seiscientos dieciseis", 617: "seiscientos diecisiete", 618: "seiscientos dieciocho", 619: "seiscientos diecinueve", 620: "seiscientos veinte",

        621: "seiscientos veintiuno", 622: "seiscientos veintidos", 623: "seiscientos veintitres",624: "seiscientos veinticuatro", 625: "seiscientos veinticinco", 
        626: "seiscientos veintiseis", 627: "seiscientos veintisiete", 628: "seiscientos vientiocho", 629: "seiscientos vientinueve", 630: "seiscientos treinta",

        631: "seiscientos treinta", 632: "seiscientos treinta y dos", 633: "seiscientos treinta y tres", 634: "seiscientos treinta y cuatro", 635: "seiscientos treinta y cinco", 
        636: "seiscientos treinta y seis", 637: "seiscientos treinta siete", 638: "seiscientos treinta y ocho", 639: "seiscientos treinta y nueve", 640: "seiscientos cuarenta",

        641: "seiscientos cuarenta y uno", 642: "seiscientos cuarenta y dos", 643: "seiscientos cuarenta y tres", 644: "seiscientos cuarenta y cuatro", 645: "seiscientos cuarenta y cinco", 
        646: "seiscientos cuarenta y seis", 647: "seiscientos cuarenta y siete", 648: "seiscientos cuarenta y ocho", 649: "seiscientos cuarenta y nueve", 650: "seiscientos cincuenta",

        651: "seiscientos cincuenta y uno", 652: "seiscientos cincuenta y dos", 653: "seiscientos cincuenta y tres", 654: "seiscientos cincuenta y cuatro", 655: "seiscientos cincuenta y cinco", 
        656: "seiscientos cincuenta y seis", 657: "seiscientos cincuenta y siete", 658: "seiscientos cincuenta y ocho", 659: "seiscientos cincuenta y nueve", 660: "seiscientos sesenta",

        661: "seiscientos sesenta y uno", 662: "seiscientos sesenta y dos", 663: "seiscientos sesenta y tres", 664: "seiscientos sesenta y cuatro", 665: "seiscientos sesenta y cinco", 
        666: "seiscientos sesenta y seis", 667: "seiscientos sesenta y siete", 668: "seiscientos sesenta y ocho", 669: "seiscientos sesenta y nueve", 670: "seiscientos setenta",

        671: "seiscientos setenta y uno",672: "seiscientos setenta y dos", 673: "seiscientos setenta y tres", 674: "seiscientos setenta y cuatro", 675: "seiscientos setenta y cinco", 
        676: "seiscientos setenta y seis", 677: "seiscientos setenta y siete", 678: "seiscientos setenta y ocho", 679: "seiscientos setenta y nueve", 680: "seiscientos ochenta",

        681: "seiscientos ochenta y uno",682: "seiscientos ochenta y dos", 683: "seiscientos ochenta y tres", 684: "seiscientos ochenta y cuatro", 685: "seiscientos ochenta y cinco", 
        686: "seiscientos ochenta y seis", 687: "seiscientos ochenta y siete", 688: "seiscientos ochenta y ocho", 689: "seiscientos ochenta y nueve", 690: "seiscientos noventa",

        691: "seiscientos noventa y uno", 692: "seiscientos noventa y dos", 693: "seiscientos noventa y tres", 694: "seiscientos noventa y cuatro", 695: "seiscientos noventa y cinco", 
        696: "seiscientos noventa y seis", 697: "seiscientos noventa y siete", 698: "seiscientos noventa y ocho", 699: "seiscientos noventa y nueve", 700: "setecientos",

        //701 - 800
        701: "setecientos uno", 702: "setecientos dos", 703: "setecientos tres", 704: "setecientos cuatro", 705: "setecientos cinco", 
        706: "setecientos seis", 707: "setecientos siete", 708: "setecientos ocho", 709: "setecientos nueve", 710: "setecientos diez",

        711: "setecientos once", 712: "setecientos doce", 713: "setecientos trece", 714: "setecientos catorce", 715: "setecientos quince", 
        716: "setecientos dieciseis", 717: "setecientos diecisiete", 718: "setecientos dieciocho", 719: "setecientos diecinueve", 720: "setecientos veinte",

        721: "setecientos veintiuno", 722: "setecientos veintidos", 723: "setecientos veintitres", 724: "setecientos veinticuatro", 725: "setecientos veinticinco", 
        726: "setecientos veintiseis", 727: "setecientos veintisiete", 728: "setecientos vientiocho", 729: "setecientos vientinueve", 730: "setecientos treinta",

        731: "setecientos treinta", 732: "setecientos treinta y dos",733: "setecientos treinta y tres", 734: "setecientos treinta y cuatro", 735: "setecientos treinta y cinco", 
        736: "setecientos treinta y seis", 737: "setecientos treinta siete", 738: "setecientos treinta y ocho", 739: "setecientos treinta y nueve", 740: "setecientos cuarenta",

        741: "setecientos cuarenta y uno", 742: "setecientos cuarenta y dos", 743: "setecientos cuarenta y tres", 744: "setecientos cuarenta y cuatro", 745: "setecientos cuarenta y cinco", 
        746: "setecientos cuarenta y seis", 747: "setecientos cuarenta y siete", 748: "setecientos cuarenta y ocho", 749: "setecientos cuarenta y nueve",750: "setecientos cincuenta",

        751: "setecientos cincuenta y uno", 752: "setecientos cincuenta y dos", 753: "setecientos cincuenta y tres", 754: "setecientos cincuenta y cuatro", 755: "setecientos cincuenta y cinco", 
        756: "setecientos cincuenta y seis", 757: "setecientos cincuenta y siete", 758: "setecientos cincuenta y ocho", 759: "setecientos cincuenta y nueve", 760: "setecientos sesenta",

        761: "setecientos sesenta y uno",762: "setecientos sesenta y dos", 763: "setecientos sesenta y tres",764: "setecientos sesenta y cuatro", 765: "setecientos sesenta y cinco", 
        766: "setecientos sesenta y seis", 767: "setecientos sesenta y siete", 768: "setecientos sesenta y ocho",769: "setecientos sesenta y nueve", 770: "setecientos setenta",

        771: "setecientos setenta y uno", 772: "setecientos setenta y dos", 773: "setecientos setenta y tres",774: "setecientos setenta y cuatro", 775: "setecientos setenta y cinco", 
        776: "setecientos setenta y seis", 777: "setecientos setenta y siete", 778: "setecientos setenta y ocho",779: "setecientos setenta y nueve", 780: "setecientos ochenta",

        781: "setecientos ochenta y uno", 782: "setecientos ochenta y dos", 783: "setecientos ochenta y tres", 784: "setecientos ochenta y cuatro", 785: "setecientos ochenta y cinco", 
        786: "setecientos ochenta y seis", 787: "setecientos ochenta y siete", 788: "setecientos ochenta y ocho", 789: "setecientos ochenta y nueve", 790: "setecientos noventa",

        791: "setecientos noventa y uno", 792: "setecientos noventa y dos", 793: "setecientos noventa y tres",794: "setecientos noventa y cuatro", 795: "setecientos noventa y cinco", 
        796: "setecientos noventa y seis", 797: "setecientos noventa y siete", 798: "setecientos noventa y ocho", 799: "setecientos noventa y nueve", 800: "ochocientos",

        //801 - 900
        801: "ochocientos uno", 802: "ochocientos dos", 803: "ochocientos tres", 804: "ochocientos cuatro", 805: "ochocientos cinco", 
        806: "ochocientos seis", 807: "ochocientos siete", 808: "ochocientos ocho", 809: "ochocientos nueve", 810: "ochocientos diez",
         
        811: "ochocientos once", 812: "ochocientos doce", 813: "ochocientos trece", 814: "novecientos catorce", 815: "ochocientos quince", 
        816: "ochocientos dieciseis", 817: "ochocientos diecisiete", 818: "ochocientos dieciocho", 819: "ochocientos diecinueve", 820: "ochocientos veinte",

        821: "ochocientos veintiuno", 822: "ochocientos veintidos", 823: "ochocientos veintitres", 824: "ochocientos veinticuatro", 825: "ochocientos veinticinco", 
        826: "ochocientos veintiseis", 827: "ochocientos veintisiete", 828: "novecientos vientiocho", 829: "ochocientos vientinueve", 830: "ochocientos treinta",

        831: "ochocientos treinta", 832: "ochocientos treinta y dos", 833: "ochocientos treinta y tres", 834: "ochocientos treinta y cuatro", 835: "ochocientos treinta y cinco", 
        836: "ochocientos treinta y seis", 837: "ochocientos treinta siete", 838: "ochocientos treinta y ocho", 839: "ochocientos treinta y nueve", 840: "ochocientos cuarenta",

        841: "ochocientos cuarenta y uno", 842: "ochocientos cuarenta y dos", 843: "ochocientos cuarenta y tres", 844: "ochocientos cuarenta y cuatro", 845: "ochocientos cuarenta y cinco", 
        846: "ochocientos cuarenta y seis", 847: "ochocientos cuarenta y siete", 848: "ochocientos cuarenta y ocho", 849: "ochocientos cuarenta y nueve", 850: "ochocientos cincuenta",

        851: "ochocientos cincuenta y uno", 852: "ochocientos cincuenta y dos", 853: "ochocientos cincuenta y tres", 854: "ochocientos cincuenta y cuatro", 855: "ochocientos cincuenta y cinco", 
        856: "ochocientos cincuenta y seis", 857: "ochocientos cincuenta y siete", 858: "ochocientos cincuenta y ocho", 859: "ochocientos cincuenta y nueve", 860: "ochocientos sesenta",

        861: "ochocientos sesenta y uno", 862: "ochocientos sesenta y dos", 863: "ochocientos sesenta y tres",8864: "ochocientos sesenta y cuatro", 865: "ochocientos sesenta y cinco", 
        866: "ochocientos sesenta y seis", 867: "ochocientos sesenta y siete", 868: "ochocientos sesenta y ocho", 869: "ochocientos sesenta y nueve", 870: "ochocientos setenta",

        871: "ochocientos setenta y uno",872: "ochocientos setenta y dos", 873: "ochocientos setenta y tres", 874: "ochocientos setenta y cuatro", 875: "ochocientos setenta y cinco", 
        876: "ochocientos setenta y seis", 877: "ochocientos setenta y siete", 878: "ochocientos setenta y ocho",879: "ochocientos setenta y nueve",880: "ochocientos ochenta",

        881: "ochocientos ochenta y uno", 882: "ochocientos ochenta y dos", 883: "ochocientos ochenta y tres", 884: "ochocientos ochenta y cuatro", 885: "ochocientos ochenta y cinco", 
        886: "ochocientos ochenta y seis", 887: "ochocientos ochenta y siete", 888: "novecientos ochenta y ocho", 889: "ochocientos ochenta y nueve",890: "ochocientos noventa",

        891: "ochocientos noventa y uno", 892: "ochocientos noventa y dos",893: "ochocientos noventa y tres", 894: "ochocientos noventa y cuatro", 895: "ochocientos noventa y cinco", 
        896: "ochocientos noventa y seis", 897: "ochocientos noventa y siete", 898: "ochocientos noventa y ocho", 899: "ochocientos noventa y nueve", 900: "novecientos",

        //900 - 1000
        901: "novecientos uno", 902: "novecientos dos", 903: "novecientos tres", 904: "novecientos cuatro", 905: "novecientos cinco", 
        906: "novecientos seis", 907: "novecientos siete", 908: "novecientos ocho", 909: "novecientos nueve", 910: "novecientos diez",

        911: "novecientos once", 912: "novecientos doce", 913: "novecientos trece", 914: "novecientos catorce", 915: "novecientos quince", 
        916: "novecientos dieciseis", 917: "novecientos diecisiete", 918: "novecientos dieciocho", 919: "novecientos diecinueve", 920: "novecientos veinte",

        921: "novecientos veintiuno", 922: "novecientos veintidos", 923: "novecientos veintitres", 924: "novecientos veinticuatro", 925: "novecientos veinticinco", 
        926: "novecientos veintiseis", 927: "novecientos veintisiete", 928: "novecientos vientiocho", 929: "novecientos vientinueve", 930: "novecientos treinta",

        931: "novecientos treinta", 932: "novecientos treinta y dos", 933: "novecientos treinta y tres", 934: "novecientos treinta y cuatro", 935: "novecientos treinta y cinco", 
        936: "novecientos treinta y seis", 937: "novecientos treinta siete", 938: "novecientos treinta y ocho", 939: "novecientos treinta y nueve", 940: "novecientos cuarenta",

        941: "novecientos cuarenta y uno", 942: "novecientos cuarenta y dos", 943: "novecientos cuarenta y tres", 944: "novecientos cuarenta y cuatro", 945: "novecientos cuarenta y cinco", 
        946: "novecientos cuarenta y seis", 947: "novecientos cuarenta y siete", 948: "novecientos cuarenta y ocho", 949: "novecientos cuarenta y nueve", 950: "novecientos cincuenta",

        951: "novecientos cincuenta y uno", 952: "novecientos cincuenta y dos", 953: "novecientos cincuenta y tres", 954: "novecientos cincuenta y cuatro", 955: "novecientos cincuenta y cinco", 
        956: "novecientos cincuenta y seis", 957: "novecientos cincuenta y siete", 958: "novecientos cincuenta y ocho", 959: "novecientos cincuenta y nueve", 960: "novecientos sesenta",

        961: "novecientos sesenta y uno", 962: "novecientos sesenta y dos", 963: "novecientos sesenta y tres", 964: "novecientos sesenta y cuatro", 965: "novecientos sesenta y cinco", 
        966: "novecientos sesenta y seis", 967: "novecientos sesenta y siete", 968: "novecientos sesenta y ocho", 969: "novecientos sesenta y nueve", 970: "novecientos setenta",

        971: "novecientos setenta y uno",972: "novecientos setenta y dos", 973: "novecientos setenta y tres", 974: "novecientos setenta y cuatro", 975: "novecientos setenta y cinco", 
        976: "novecientos setenta y seis", 977: "novecientos setenta y siete", 978: "novecientos setenta y ocho",979: "novecientos setenta y nueve", 980: "novecientos ochenta",

        981: "novecientos ochenta y uno", 982: "novecientos ochenta y dos", 983: "novecientos ochenta y tres", 984: "novecientos ochenta y cuatro", 985: "novecientos ochenta y cinco", 
        986: "novecientos ochenta y seis", 987: "novecientos ochenta y siete", 988: "novecientos ochenta y ocho", 989: "novecientos ochenta y nueve", 990: "novecientos noventa",

        991: "novecientos noventa y uno", 992: "novecientos noventa y dos",993: "novecientos noventa y tres", 994: "novecientos noventa y cuatro", 995: "novecientos noventa y cinco", 
        996: "novecientos noventa y seis", 997: "novecientos noventa y siete", 998: "novecientos noventa y ocho", 999: "novecientos noventa y nueve", 1000: "mil"
    }


    var traduccion;
    Object.entries(objetoDeLaTraduccion).forEach(([key, value]) => {
        if(key == input ){
            traduccion = value;
        }else if(parseInt(input) > 1000 || parseInt(input) < 1){

            traduccion = "El valor debe estar entre 1 y 1000."
        }

    });
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Translate</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                <IonRow>
                        <IonCol>
                            <h1>Ingrese el numero a traducir</h1>
                            <IonInput type="text" value={input} placeholder="Ingrese el numero" onIonChange={(e: any) => setNumber(e.detail.value)}></IonInput>
                        </IonCol>
                        </IonRow>
                    
            <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent>
                        <h2>{traduccion}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
                    

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Translate;