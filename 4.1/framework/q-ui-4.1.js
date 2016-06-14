/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":true,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */
/**
 * A Collection of utility functions to escape and unescape strings.
 */
qx.Bootstrap.define("qx.bom.String", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /** Mapping of HTML entity names to the corresponding char code */
    TO_CHARCODE : {
      "quot" : 34,
      // " - double-quote
      "amp" : 38,
      // &
      "lt" : 60,
      // <
      "gt" : 62,
      // >
      // http://www.w3.org/TR/REC-html40/sgml/entities.html
      // ISO 8859-1 characters
      "nbsp" : 160,
      // no-break space
      "iexcl" : 161,
      // inverted exclamation mark
      "cent" : 162,
      // cent sign
      "pound" : 163,
      // pound sterling sign
      "curren" : 164,
      // general currency sign
      "yen" : 165,
      // yen sign
      "brvbar" : 166,
      // broken (vertical) bar
      "sect" : 167,
      // section sign
      "uml" : 168,
      // umlaut (dieresis)
      "copy" : 169,
      // copyright sign
      "ordf" : 170,
      // ordinal indicator, feminine
      "laquo" : 171,
      // angle quotation mark, left
      "not" : 172,
      // not sign
      "shy" : 173,
      // soft hyphen
      "reg" : 174,
      // registered sign
      "macr" : 175,
      // macron
      "deg" : 176,
      // degree sign
      "plusmn" : 177,
      // plus-or-minus sign
      "sup2" : 178,
      // superscript two
      "sup3" : 179,
      // superscript three
      "acute" : 180,
      // acute accent
      "micro" : 181,
      // micro sign
      "para" : 182,
      // pilcrow (paragraph sign)
      "middot" : 183,
      // middle dot
      "cedil" : 184,
      // cedilla
      "sup1" : 185,
      // superscript one
      "ordm" : 186,
      // ordinal indicator, masculine
      "raquo" : 187,
      // angle quotation mark, right
      "frac14" : 188,
      // fraction one-quarter
      "frac12" : 189,
      // fraction one-half
      "frac34" : 190,
      // fraction three-quarters
      "iquest" : 191,
      // inverted question mark
      "Agrave" : 192,
      // capital A, grave accent
      "Aacute" : 193,
      // capital A, acute accent
      "Acirc" : 194,
      // capital A, circumflex accent
      "Atilde" : 195,
      // capital A, tilde
      "Auml" : 196,
      // capital A, dieresis or umlaut mark
      "Aring" : 197,
      // capital A, ring
      "AElig" : 198,
      // capital AE diphthong (ligature)
      "Ccedil" : 199,
      // capital C, cedilla
      "Egrave" : 200,
      // capital E, grave accent
      "Eacute" : 201,
      // capital E, acute accent
      "Ecirc" : 202,
      // capital E, circumflex accent
      "Euml" : 203,
      // capital E, dieresis or umlaut mark
      "Igrave" : 204,
      // capital I, grave accent
      "Iacute" : 205,
      // capital I, acute accent
      "Icirc" : 206,
      // capital I, circumflex accent
      "Iuml" : 207,
      // capital I, dieresis or umlaut mark
      "ETH" : 208,
      // capital Eth, Icelandic
      "Ntilde" : 209,
      // capital N, tilde
      "Ograve" : 210,
      // capital O, grave accent
      "Oacute" : 211,
      // capital O, acute accent
      "Ocirc" : 212,
      // capital O, circumflex accent
      "Otilde" : 213,
      // capital O, tilde
      "Ouml" : 214,
      // capital O, dieresis or umlaut mark
      "times" : 215,
      // multiply sign
      "Oslash" : 216,
      // capital O, slash
      "Ugrave" : 217,
      // capital U, grave accent
      "Uacute" : 218,
      // capital U, acute accent
      "Ucirc" : 219,
      // capital U, circumflex accent
      "Uuml" : 220,
      // capital U, dieresis or umlaut mark
      "Yacute" : 221,
      // capital Y, acute accent
      "THORN" : 222,
      // capital THORN, Icelandic
      "szlig" : 223,
      // small sharp s, German (sz ligature)
      "agrave" : 224,
      // small a, grave accent
      "aacute" : 225,
      // small a, acute accent
      "acirc" : 226,
      // small a, circumflex accent
      "atilde" : 227,
      // small a, tilde
      "auml" : 228,
      // small a, dieresis or umlaut mark
      "aring" : 229,
      // small a, ring
      "aelig" : 230,
      // small ae diphthong (ligature)
      "ccedil" : 231,
      // small c, cedilla
      "egrave" : 232,
      // small e, grave accent
      "eacute" : 233,
      // small e, acute accent
      "ecirc" : 234,
      // small e, circumflex accent
      "euml" : 235,
      // small e, dieresis or umlaut mark
      "igrave" : 236,
      // small i, grave accent
      "iacute" : 237,
      // small i, acute accent
      "icirc" : 238,
      // small i, circumflex accent
      "iuml" : 239,
      // small i, dieresis or umlaut mark
      "eth" : 240,
      // small eth, Icelandic
      "ntilde" : 241,
      // small n, tilde
      "ograve" : 242,
      // small o, grave accent
      "oacute" : 243,
      // small o, acute accent
      "ocirc" : 244,
      // small o, circumflex accent
      "otilde" : 245,
      // small o, tilde
      "ouml" : 246,
      // small o, dieresis or umlaut mark
      "divide" : 247,
      // divide sign
      "oslash" : 248,
      // small o, slash
      "ugrave" : 249,
      // small u, grave accent
      "uacute" : 250,
      // small u, acute accent
      "ucirc" : 251,
      // small u, circumflex accent
      "uuml" : 252,
      // small u, dieresis or umlaut mark
      "yacute" : 253,
      // small y, acute accent
      "thorn" : 254,
      // small thorn, Icelandic
      "yuml" : 255,
      // small y, dieresis or umlaut mark
      // Latin Extended-B
      "fnof" : 402,
      // latin small f with hook = function= florin, U+0192 ISOtech
      // Greek
      "Alpha" : 913,
      // greek capital letter alpha, U+0391
      "Beta" : 914,
      // greek capital letter beta, U+0392
      "Gamma" : 915,
      // greek capital letter gamma,U+0393 ISOgrk3
      "Delta" : 916,
      // greek capital letter delta,U+0394 ISOgrk3
      "Epsilon" : 917,
      // greek capital letter epsilon, U+0395
      "Zeta" : 918,
      // greek capital letter zeta, U+0396
      "Eta" : 919,
      // greek capital letter eta, U+0397
      "Theta" : 920,
      // greek capital letter theta,U+0398 ISOgrk3
      "Iota" : 921,
      // greek capital letter iota, U+0399
      "Kappa" : 922,
      // greek capital letter kappa, U+039A
      "Lambda" : 923,
      // greek capital letter lambda,U+039B ISOgrk3
      "Mu" : 924,
      // greek capital letter mu, U+039C
      "Nu" : 925,
      // greek capital letter nu, U+039D
      "Xi" : 926,
      // greek capital letter xi, U+039E ISOgrk3
      "Omicron" : 927,
      // greek capital letter omicron, U+039F
      "Pi" : 928,
      // greek capital letter pi, U+03A0 ISOgrk3
      "Rho" : 929,
      // greek capital letter rho, U+03A1
      // there is no Sigmaf, and no U+03A2 character either
      "Sigma" : 931,
      // greek capital letter sigma,U+03A3 ISOgrk3
      "Tau" : 932,
      // greek capital letter tau, U+03A4
      "Upsilon" : 933,
      // greek capital letter upsilon,U+03A5 ISOgrk3
      "Phi" : 934,
      // greek capital letter phi,U+03A6 ISOgrk3
      "Chi" : 935,
      // greek capital letter chi, U+03A7
      "Psi" : 936,
      // greek capital letter psi,U+03A8 ISOgrk3
      "Omega" : 937,
      // greek capital letter omega,U+03A9 ISOgrk3
      "alpha" : 945,
      // greek small letter alpha,U+03B1 ISOgrk3
      "beta" : 946,
      // greek small letter beta, U+03B2 ISOgrk3
      "gamma" : 947,
      // greek small letter gamma,U+03B3 ISOgrk3
      "delta" : 948,
      // greek small letter delta,U+03B4 ISOgrk3
      "epsilon" : 949,
      // greek small letter epsilon,U+03B5 ISOgrk3
      "zeta" : 950,
      // greek small letter zeta, U+03B6 ISOgrk3
      "eta" : 951,
      // greek small letter eta, U+03B7 ISOgrk3
      "theta" : 952,
      // greek small letter theta,U+03B8 ISOgrk3
      "iota" : 953,
      // greek small letter iota, U+03B9 ISOgrk3
      "kappa" : 954,
      // greek small letter kappa,U+03BA ISOgrk3
      "lambda" : 955,
      // greek small letter lambda,U+03BB ISOgrk3
      "mu" : 956,
      // greek small letter mu, U+03BC ISOgrk3
      "nu" : 957,
      // greek small letter nu, U+03BD ISOgrk3
      "xi" : 958,
      // greek small letter xi, U+03BE ISOgrk3
      "omicron" : 959,
      // greek small letter omicron, U+03BF NEW
      "pi" : 960,
      // greek small letter pi, U+03C0 ISOgrk3
      "rho" : 961,
      // greek small letter rho, U+03C1 ISOgrk3
      "sigmaf" : 962,
      // greek small letter final sigma,U+03C2 ISOgrk3
      "sigma" : 963,
      // greek small letter sigma,U+03C3 ISOgrk3
      "tau" : 964,
      // greek small letter tau, U+03C4 ISOgrk3
      "upsilon" : 965,
      // greek small letter upsilon,U+03C5 ISOgrk3
      "phi" : 966,
      // greek small letter phi, U+03C6 ISOgrk3
      "chi" : 967,
      // greek small letter chi, U+03C7 ISOgrk3
      "psi" : 968,
      // greek small letter psi, U+03C8 ISOgrk3
      "omega" : 969,
      // greek small letter omega,U+03C9 ISOgrk3
      "thetasym" : 977,
      // greek small letter theta symbol,U+03D1 NEW
      "upsih" : 978,
      // greek upsilon with hook symbol,U+03D2 NEW
      "piv" : 982,
      // greek pi symbol, U+03D6 ISOgrk3
      // General Punctuation
      "bull" : 8226,
      // bullet = black small circle,U+2022 ISOpub
      // bullet is NOT the same as bullet operator, U+2219
      "hellip" : 8230,
      // horizontal ellipsis = three dot leader,U+2026 ISOpub
      "prime" : 8242,
      // prime = minutes = feet, U+2032 ISOtech
      "Prime" : 8243,
      // double prime = seconds = inches,U+2033 ISOtech
      "oline" : 8254,
      // overline = spacing overscore,U+203E NEW
      "frasl" : 8260,
      // fraction slash, U+2044 NEW
      // Letterlike Symbols
      "weierp" : 8472,
      // script capital P = power set= Weierstrass p, U+2118 ISOamso
      "image" : 8465,
      // blackletter capital I = imaginary part,U+2111 ISOamso
      "real" : 8476,
      // blackletter capital R = real part symbol,U+211C ISOamso
      "trade" : 8482,
      // trade mark sign, U+2122 ISOnum
      "alefsym" : 8501,
      // alef symbol = first transfinite cardinal,U+2135 NEW
      // alef symbol is NOT the same as hebrew letter alef,U+05D0 although the same glyph could be used to depict both characters
      // Arrows
      "larr" : 8592,
      // leftwards arrow, U+2190 ISOnum
      "uarr" : 8593,
      // upwards arrow, U+2191 ISOnum-->
      "rarr" : 8594,
      // rightwards arrow, U+2192 ISOnum
      "darr" : 8595,
      // downwards arrow, U+2193 ISOnum
      "harr" : 8596,
      // left right arrow, U+2194 ISOamsa
      "crarr" : 8629,
      // downwards arrow with corner leftwards= carriage return, U+21B5 NEW
      "lArr" : 8656,
      // leftwards double arrow, U+21D0 ISOtech
      // ISO 10646 does not say that lArr is the same as the 'is implied by' arrowbut also does not have any other character for that function. So ? lArr canbe used for 'is implied by' as ISOtech suggests
      "uArr" : 8657,
      // upwards double arrow, U+21D1 ISOamsa
      "rArr" : 8658,
      // rightwards double arrow,U+21D2 ISOtech
      // ISO 10646 does not say this is the 'implies' character but does not have another character with this function so ?rArr can be used for 'implies' as ISOtech suggests
      "dArr" : 8659,
      // downwards double arrow, U+21D3 ISOamsa
      "hArr" : 8660,
      // left right double arrow,U+21D4 ISOamsa
      // Mathematical Operators
      "forall" : 8704,
      // for all, U+2200 ISOtech
      "part" : 8706,
      // partial differential, U+2202 ISOtech
      "exist" : 8707,
      // there exists, U+2203 ISOtech
      "empty" : 8709,
      // empty set = null set = diameter,U+2205 ISOamso
      "nabla" : 8711,
      // nabla = backward difference,U+2207 ISOtech
      "isin" : 8712,
      // element of, U+2208 ISOtech
      "notin" : 8713,
      // not an element of, U+2209 ISOtech
      "ni" : 8715,
      // contains as member, U+220B ISOtech
      // should there be a more memorable name than 'ni'?
      "prod" : 8719,
      // n-ary product = product sign,U+220F ISOamsb
      // prod is NOT the same character as U+03A0 'greek capital letter pi' though the same glyph might be used for both
      "sum" : 8721,
      // n-ary summation, U+2211 ISOamsb
      // sum is NOT the same character as U+03A3 'greek capital letter sigma' though the same glyph might be used for both
      "minus" : 8722,
      // minus sign, U+2212 ISOtech
      "lowast" : 8727,
      // asterisk operator, U+2217 ISOtech
      "radic" : 8730,
      // square root = radical sign,U+221A ISOtech
      "prop" : 8733,
      // proportional to, U+221D ISOtech
      "infin" : 8734,
      // infinity, U+221E ISOtech
      "ang" : 8736,
      // angle, U+2220 ISOamso
      "and" : 8743,
      // logical and = wedge, U+2227 ISOtech
      "or" : 8744,
      // logical or = vee, U+2228 ISOtech
      "cap" : 8745,
      // intersection = cap, U+2229 ISOtech
      "cup" : 8746,
      // union = cup, U+222A ISOtech
      "int" : 8747,
      // integral, U+222B ISOtech
      "there4" : 8756,
      // therefore, U+2234 ISOtech
      "sim" : 8764,
      // tilde operator = varies with = similar to,U+223C ISOtech
      // tilde operator is NOT the same character as the tilde, U+007E,although the same glyph might be used to represent both
      "cong" : 8773,
      // approximately equal to, U+2245 ISOtech
      "asymp" : 8776,
      // almost equal to = asymptotic to,U+2248 ISOamsr
      "ne" : 8800,
      // not equal to, U+2260 ISOtech
      "equiv" : 8801,
      // identical to, U+2261 ISOtech
      "le" : 8804,
      // less-than or equal to, U+2264 ISOtech
      "ge" : 8805,
      // greater-than or equal to,U+2265 ISOtech
      "sub" : 8834,
      // subset of, U+2282 ISOtech
      "sup" : 8835,
      // superset of, U+2283 ISOtech
      // note that nsup, 'not a superset of, U+2283' is not covered by the Symbol font encoding and is not included. Should it be, for symmetry?It is in ISOamsn  --> <!ENTITY nsub": 8836,  //not a subset of, U+2284 ISOamsn
      "sube" : 8838,
      // subset of or equal to, U+2286 ISOtech
      "supe" : 8839,
      // superset of or equal to,U+2287 ISOtech
      "oplus" : 8853,
      // circled plus = direct sum,U+2295 ISOamsb
      "otimes" : 8855,
      // circled times = vector product,U+2297 ISOamsb
      "perp" : 8869,
      // up tack = orthogonal to = perpendicular,U+22A5 ISOtech
      "sdot" : 8901,
      // dot operator, U+22C5 ISOamsb
      // dot operator is NOT the same character as U+00B7 middle dot
      // Miscellaneous Technical
      "lceil" : 8968,
      // left ceiling = apl upstile,U+2308 ISOamsc
      "rceil" : 8969,
      // right ceiling, U+2309 ISOamsc
      "lfloor" : 8970,
      // left floor = apl downstile,U+230A ISOamsc
      "rfloor" : 8971,
      // right floor, U+230B ISOamsc
      "lang" : 9001,
      // left-pointing angle bracket = bra,U+2329 ISOtech
      // lang is NOT the same character as U+003C 'less than' or U+2039 'single left-pointing angle quotation mark'
      "rang" : 9002,
      // right-pointing angle bracket = ket,U+232A ISOtech
      // rang is NOT the same character as U+003E 'greater than' or U+203A 'single right-pointing angle quotation mark'
      // Geometric Shapes
      "loz" : 9674,
      // lozenge, U+25CA ISOpub
      // Miscellaneous Symbols
      "spades" : 9824,
      // black spade suit, U+2660 ISOpub
      // black here seems to mean filled as opposed to hollow
      "clubs" : 9827,
      // black club suit = shamrock,U+2663 ISOpub
      "hearts" : 9829,
      // black heart suit = valentine,U+2665 ISOpub
      "diams" : 9830,
      // black diamond suit, U+2666 ISOpub
      // Latin Extended-A
      "OElig" : 338,
      //  -- latin capital ligature OE,U+0152 ISOlat2
      "oelig" : 339,
      //  -- latin small ligature oe, U+0153 ISOlat2
      // ligature is a misnomer, this is a separate character in some languages
      "Scaron" : 352,
      //  -- latin capital letter S with caron,U+0160 ISOlat2
      "scaron" : 353,
      //  -- latin small letter s with caron,U+0161 ISOlat2
      "Yuml" : 376,
      //  -- latin capital letter Y with diaeresis,U+0178 ISOlat2
      // Spacing Modifier Letters
      "circ" : 710,
      //  -- modifier letter circumflex accent,U+02C6 ISOpub
      "tilde" : 732,
      // small tilde, U+02DC ISOdia
      // General Punctuation
      "ensp" : 8194,
      // en space, U+2002 ISOpub
      "emsp" : 8195,
      // em space, U+2003 ISOpub
      "thinsp" : 8201,
      // thin space, U+2009 ISOpub
      "zwnj" : 8204,
      // zero width non-joiner,U+200C NEW RFC 2070
      "zwj" : 8205,
      // zero width joiner, U+200D NEW RFC 2070
      "lrm" : 8206,
      // left-to-right mark, U+200E NEW RFC 2070
      "rlm" : 8207,
      // right-to-left mark, U+200F NEW RFC 2070
      "ndash" : 8211,
      // en dash, U+2013 ISOpub
      "mdash" : 8212,
      // em dash, U+2014 ISOpub
      "lsquo" : 8216,
      // left single quotation mark,U+2018 ISOnum
      "rsquo" : 8217,
      // right single quotation mark,U+2019 ISOnum
      "sbquo" : 8218,
      // single low-9 quotation mark, U+201A NEW
      "ldquo" : 8220,
      // left double quotation mark,U+201C ISOnum
      "rdquo" : 8221,
      // right double quotation mark,U+201D ISOnum
      "bdquo" : 8222,
      // double low-9 quotation mark, U+201E NEW
      "dagger" : 8224,
      // dagger, U+2020 ISOpub
      "Dagger" : 8225,
      // double dagger, U+2021 ISOpub
      "permil" : 8240,
      // per mille sign, U+2030 ISOtech
      "lsaquo" : 8249,
      // single left-pointing angle quotation mark,U+2039 ISO proposed
      // lsaquo is proposed but not yet ISO standardized
      "rsaquo" : 8250,
      // single right-pointing angle quotation mark,U+203A ISO proposed
      // rsaquo is proposed but not yet ISO standardized
      "euro" : 8364
    },
    /**
     * Escapes the characters in a <code>String</code> using HTML entities.
     *
     * For example: <tt>"bread" & "butter"</tt> => <tt>&amp;quot;bread&amp;quot; &amp;amp; &amp;quot;butter&amp;quot;</tt>.
     * Supports all known HTML 4.0 entities, including funky accents.
     *
     * * <a href="http://www.w3.org/TR/REC-html32#latin1">HTML 3.2 Character Entities for ISO Latin-1</a>
     * * <a href="http://www.w3.org/TR/REC-html40/sgml/entities.html">HTML 4.0 Character entity references</a>
     * * <a href="http://www.w3.org/TR/html401/charset.html#h-5.3">HTML 4.01 Character References</a>
     * * <a href="http://www.w3.org/TR/html401/charset.html#code-position">HTML 4.01 Code positions</a>
     *
     * @param str {String} the String to escape
     * @return {String} a new escaped String
     * @see #unescape
     */
    escape : function(str){

      return qx.util.StringEscape.escape(str, qx.bom.String.FROM_CHARCODE);
    },
    /**
     * Unescapes a string containing entity escapes to a string
     * containing the actual Unicode characters corresponding to the
     * escapes. Supports HTML 4.0 entities.
     *
     * For example, the string "&amp;lt;Fran&amp;ccedil;ais&amp;gt;"
     * will become "&lt;Fran&ccedil;ais&gt;"
     *
     * If an entity is unrecognized, it is left alone, and inserted
     * verbatim into the result string. e.g. "&amp;gt;&amp;zzzz;x" will
     * become "&gt;&amp;zzzz;x".
     *
     * @param str {String} the String to unescape, may be null
     * @return {var} a new unescaped String
     * @see #escape
     */
    unescape : function(str){

      return qx.util.StringEscape.unescape(str, qx.bom.String.TO_CHARCODE);
    },
    /**
     * Converts a plain text string into HTML.
     * This is similar to {@link #escape} but converts new lines to
     * <tt>&lt:br&gt:</tt> and preserves whitespaces.
     *
     * @param str {String} the String to convert
     * @return {String} a new converted String
     * @see #escape
     */
    fromText : function(str){

      return qx.bom.String.escape(str).replace(/(  |\n)/g, function(chr){

        var map = {
          "  " : " &nbsp;",
          "\n" : "<br>"
        };
        return map[chr] || chr;
      });
    },
    /**
     * Converts HTML to plain text.
     *
     * * Strips all HTML tags
     * * converts <tt>&lt:br&gt:</tt> to new line
     * * unescapes HTML entities
     *
     * @param str {String} HTML string to converts
     * @return {String} plain text representation of the HTML string
     */
    toText : function(str){

      return qx.bom.String.unescape(str.replace(/\s+|<([^>])+>/gi, function(chr)//return qx.bom.String.unescape(str.replace(/<\/?[^>]+(>|$)/gi, function(chr)
      //return qx.bom.String.unescape(str.replace(/<\/?[^>]+(>|$)/gi, function(chr)
      {

        if(chr.indexOf("<br") === 0){

          return "\n";
        } else if(chr.length > 0 && chr.replace(/^\s*/, "").replace(/\s*$/, "") == ""){

          return " ";
        } else {

          return "";
        };
      }));
    }
  },
  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */
  defer : function(statics){

    /** Mapping of char codes to HTML entity names */
    statics.FROM_CHARCODE = qx.lang.Object.invert(statics.TO_CHARCODE);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */
/**
 * Generic escaping and unescaping of DOM strings.
 *
 * {@link qx.bom.String} for (un)escaping of HTML strings.
 * {@link qx.xml.String} for (un)escaping of XML strings.
 */
qx.Bootstrap.define("qx.util.StringEscape", {
  statics : {
    /**
     * generic escaping method
     *
     * @param str {String} string to escape
     * @param charCodeToEntities {Map} entity to charcode map
     * @return {String} escaped string
     * @signature function(str, charCodeToEntities)
     */
    escape : function(str, charCodeToEntities){

      var entity,result = "";
      for(var i = 0,l = str.length;i < l;i++){

        var chr = str.charAt(i);
        var code = chr.charCodeAt(0);
        if(charCodeToEntities[code]){

          entity = "&" + charCodeToEntities[code] + ";";
        } else {

          if(code > 0x7F){

            entity = "&#" + code + ";";
          } else {

            entity = chr;
          };
        };
        result += entity;
      };
      return result;
    },
    /**
     * generic unescaping method
     *
     * @param str {String} string to unescape
     * @param entitiesToCharCode {Map} charcode to entity map
     * @return {String} unescaped string
     */
    unescape : function(str, entitiesToCharCode){

      return str.replace(/&[#\w]+;/gi, function(entity){

        var chr = entity;
        var entity = entity.substring(1, entity.length - 1);
        var code = entitiesToCharCode[entity];
        if(code){

          chr = String.fromCharCode(code);
        } else {

          if(entity.charAt(0) == '#'){

            if(entity.charAt(1).toUpperCase() == 'X'){

              code = entity.substring(2);
              // match hex number
              if(code.match(/^[0-9A-Fa-f]+$/gi)){

                chr = String.fromCharCode(parseInt(code, 16));
              };
            } else {

              code = entity.substring(1);
              // match integer
              if(code.match(/^\d+$/gi)){

                chr = String.fromCharCode(parseInt(code, 10));
              };
            };
          };
        };
        return chr;
      });
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Utility module to give some support to work with strings.
 *
 * *Info:* The <pre class='javascript'>trim</pre> method is available as <a href="#String">Polyfill</a>.
 *
 * @group (Utilities)
 */
qx.Bootstrap.define("qx.module.util.String", {
  statics : {
    /**
     * Converts a hyphenated string (separated by '-') to camel case.
     *
     * Example:
     * <pre class='javascript'>q.string.camelCase("I-like-cookies"); //returns "ILikeCookies"</pre>
     *
     * @attachStatic {qxWeb, string.camelCase}
     * @param str {String} hyphenated string
     * @return {String} camelcase string
     */
    camelCase : function(str){

      return qx.lang.String.camelCase.call(qx.lang.String, str);
    },
    /**
     * Converts a camelcased string to a hyphenated (separated by '-') string.
     *
     * Example:
     * <pre class='javascript'>q.string.hyphenate("weLikeCookies"); //returns "we-like-cookies"</pre>
     *
     * @attachStatic {qxWeb, string.hyphenate}
     * @param str {String} camelcased string
     * @return {String} hyphenated string
     */
    hyphenate : function(str){

      return qx.lang.String.hyphenate.call(qx.lang.String, str);
    },
    /**
     * Convert the first character of the string to upper case.
     *
     * @attachStatic {qxWeb, string.firstUp}
     * @signature function(str)
     * @param str {String} the string
     * @return {String} the string with an upper case first character
     */
    firstUp : qx.lang.String.firstUp,
    /**
     * Convert the first character of the string to lower case.
     *
     * @attachStatic {qxWeb, string.firstLow}
     * @signature function(str)
     * @param str {String} the string
     * @return {String} the string with a lower case first character
     */
    firstLow : qx.lang.String.firstLow,
    /**
     * Check whether the string starts with the given substring.
     *
     * @attachStatic {qxWeb, string.startsWith}
     * @signature function(fullstr, substr)
     * @param fullstr {String} the string to search in
     * @param substr {String} the substring to look for
     * @return {Boolean} whether the string starts with the given substring
     */
    startsWith : qx.lang.String.startsWith,
    /**
     * Check whether the string ends with the given substring.
     *
     * @attachStatic {qxWeb, string.endsWith}
     * @signature function(fullstr, substr)
     * @param fullstr {String} the string to search in
     * @param substr {String} the substring to look for
     * @return {Boolean} whether the string ends with the given substring
     */
    endsWith : qx.lang.String.endsWith,
    /**
     * Escapes all chars that have a special meaning in regular expressions.
     *
     * @attachStatic {qxWeb, string.escapeRegexpChars}
     * @signature function(str)
     * @param str {String} the string where to escape the chars.
     * @return {String} the string with the escaped chars.
     */
    escapeRegexpChars : qx.lang.String.escapeRegexpChars,
    /**
     * Escapes the characters in a <code>String</code> using HTML entities.
     *
     * For example: <tt>"bread" & "butter"</tt> => <tt>&amp;quot;bread&amp;quot; &amp;amp; &amp;quot;butter&amp;quot;</tt>.
     * Supports all known HTML 4.0 entities, including funky accents.
     *
     * @attachStatic {qxWeb, string.escapeHtml}
     * @signature function(str)
     * @param str {String} the String to escape
     * @return {String} a new escaped String
     */
    escapeHtml : qx.bom.String.escape
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      string : {
        camelCase : statics.camelCase,
        hyphenate : statics.hyphenate,
        firstUp : statics.firstUp,
        firstLow : statics.firstLow,
        startsWith : statics.startsWith,
        endsWith : statics.endsWith,
        escapeRegexpChars : statics.escapeRegexpChars,
        escapeHtml : statics.escapeHtml
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Romeo Kenfack (rkenfack)

************************************************************************ */
/**
 * Module for handling of HTML5 data-* attributes
 */
qx.Bootstrap.define("qx.module.Dataset", {
  statics : {
    /**
     * Sets an HTML "data-*" attribute on each item in the collection
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute [CamelCase variant]
     * @param value {var} New value of the attribute
     * @return {qxWeb} The collection for chaining
     */
    setData : function(name, value){

      this._forEachElement(function(item){

        qx.bom.element.Dataset.set(item, name, value);
      });
      return this;
    },
    /**
     *
     * Returns the value of the given HTML "data-*" attribute for the first item in the collection
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute [CamelCase variant]
     * @return {var} The value of the attribute
     *
     */
    getData : function(name){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Dataset.get(this[0], name);
      };
    },
    /**
     * Returns a map containing all the HTML "data-*" attributes of the specified element
     *
     * @attach {qxWeb}
     * @return {Map} The map containing the "data-*" attributes
     *
     */
    getAllData : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Dataset.getAll(this[0]);
      };
      return {
      };
    },
    /**
    * Checks if any element in the collection has a "data-*" attribute
    * @return {Boolean} True if any element in the collection has a "data-*" attribute
    */
    hasData : function(){

      return qx.bom.element.Dataset.hasData(this[0]);
    },
    /**
     * Remove an HTML "data-*" attribute from the given DOM element
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute
     * @return {qxWeb} The collection for chaining
     */
    removeData : function(name){

      if(this[0] && this[0].nodeType === 1){

        qx.bom.element.Dataset.remove(this[0], name);
      };
      return this;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "getData" : statics.getData,
      "setData" : statics.setData,
      "removeData" : statics.removeData,
      "getAllData" : statics.getAllData,
      "hasData" : statics.hasData
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Author:
     * Gabriel Munteanu (gabios)

************************************************************************ */
/**
 * Data-* attribute handling for DOM HTML elements.
 *
 * This feature set is supported cross-browser
 * through one common interface and is independent of the differences between
 * the multiple implementations.
 *
 */
qx.Bootstrap.define("qx.bom.element.Dataset", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Sets a data attribute on the given DOM element.
     *
     * @param element {Element} The DOM element to modify
     * @param name {String} Name of the attribute [CamelCase variant]
     * @param value {var} New value of the attribute
     */
    set : function(element, name, value){

      if(element.dataset){

        name = qx.lang.String.camelCase(name);
        if((value === null) || (value == undefined)){

          delete element.dataset[name];
        } else {

          element.dataset[name] = value;
        };
      } else {

        if(value === undefined){

          value = null;
        };
        qx.bom.element.Attribute.set(element, "data-" + qx.lang.String.hyphenate(name), value);
      };
    },
    /**
     * Returns the value of the given HTML "data-*" attribute
     *
     * @param element {Element} The DOM element to query
     * @param name {String} Name of the attribute [CamelCase variant]
     * @return {var} The value of the attribute
     *
     */
    get : function(element, name){

      if(element.dataset){

        name = qx.lang.String.camelCase(name);
        return (!element.dataset[name] ? undefined : element.dataset[name]);
      } else {

        var attrName = "data-" + qx.lang.String.hyphenate(name);
        return element.hasAttribute(attrName) ? qx.bom.element.Attribute.get(element, attrName) : undefined;
      };
    },
    /**
     * Returns a map containing all the HTML "data-*" attributes of the specified element
     *
     * @param element {Element} The DOM element to query
     * @return {Map} The map containing all the "data-*" attributes
     */
    getAll : function(element){

      if(element.dataset){

        return element.dataset;
      } else {

        var res = {
        },attr = element.attributes;
        for(var i = 0;i < attr.length;i++){

          if(attr[i].name.match(RegExp("^data-(.*)"))){

            var key = RegExp.$1;
            res[qx.lang.String.camelCase(key)] = element.getAttribute(attr[i].name);
          };
        };
        return res;
      };
    },
    /**
    * Checks if any element in the collection has a "data-*" attribute
    * @param element {Element} The DOM Element to check the presence of data-* attrubutes on.
    * @return {Boolean} True if any element in the collection has a "data-*" attribute
    */
    hasData : function(element){

      return Object.keys(qxWeb(element).getAllData()).length > 0;
    },
    /**
     * Remove an HTML "data-*" attribute from the given DOM element
     *
     * @param element {Element} The DOM element to modify
     * @param name {String} Name of the attribute
     */
    remove : function(element, name){

      this.set(element, name, undefined);
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Common normalizations for native events
 *
 * @require(qx.module.Event)
 * @require(qx.bom.Event#getTarget)
 * @require(qx.bom.Event#getRelatedTarget)
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.Native", {
  statics : {
    /**
     * List of event types to be normalized
     */
    TYPES : ["*"],
    /**
     * List of qx.bom.Event methods to be attached to native event objects
     * @internal
     */
    FORWARD_METHODS : ["getTarget", "getRelatedTarget"],
    /**
     * List of qx.module.event.Native methods to be attached to native event objects
     * @internal
     */
    BIND_METHODS : ["preventDefault", "stopPropagation", "getType"],
    /**
     * Prevent the native default behavior of the event.
     */
    preventDefault : function(){

      try{

        // this allows us to prevent some key press events in IE.
        // See bug #1049
        this.keyCode = 0;
      } catch(ex) {
      };
      this.returnValue = false;
    },
    /**
     * Stops the event's propagation to the element's parent
     */
    stopPropagation : function(){

      this.cancelBubble = true;
    },
    /**
     * Returns the event's type
     *
     * @return {String} event type
     */
    getType : function(){

      return this._type || this.type;
    },
    /**
     * Returns the target of the event.
     * Example:
     * <pre class="javascript">
     *   var collection = q("div.inline");
     *   collection.on("click", function(e) {
     *     var clickedElement = e.getTarget();
     *   });
     * </pre>
     *
     * @signature function ()
     * @return {Object} Any valid native event target
     */
    getTarget : function(){
    },
    /**
     * Computes the related target from the native DOM event
     *
     * Example:
     * <pre class="javascript">
     *   var collection = q("div.inline");
     *   collection.on("mouseout", function(e) {
     *     // when using 'mouseout' events the 'relatedTarget' is pointing to the DOM element
     *     //  the device exited to.
     *     // Useful for scenarios you only interested if e.g. the user moved away from a
     *     // section at the website
     *     var exitTarget = e.getRelatedTarget();
     *   });
     *
     *   collection.on("mouseover", function(e){
     *      // when using 'mouseover' events the 'relatedTarget' is pointing to the DOM element
     *      // the device entered from.
     *      var earlierElement = e.getRelatedTarget();
     *   });
     * </pre>
     *
     * @signature function ()
     * @return {Element} The related target
     */
    getRelatedTarget : function(){
    },
    /**
     * Computes the current target from the native DOM event. Emulates the current target
     * for all browsers without native support (like older IEs).
     *
     * Example:
     * <pre class="javascript">
     *   var collection = q("div.inline");
     *   collection.on("mouseout", function(e) {
     *     var current = e.getCurrentTarget();
     *   });
     * </pre>
     *
     * @signature function ()
     * @return {Element} The current target
     */
    getCurrentTarget : function(){
    },
    /**
     * Manipulates the native event object, adding methods if they're not
     * already present
     *
     * @param event {Event} Native event object
     * @param element {Element} DOM element the listener was attached to
     * @return {Event} Normalized event object
     * @internal
     */
    normalize : function(event, element){

      if(!event){

        return event;
      };
      var fwdMethods = qx.module.event.Native.FORWARD_METHODS;
      for(var i = 0,l = fwdMethods.length;i < l;i++){

        event[fwdMethods[i]] = qx.bom.Event[fwdMethods[i]].bind(null, event);
      };
      var bindMethods = qx.module.event.Native.BIND_METHODS;
      for(var i = 0,l = bindMethods.length;i < l;i++){

        if(typeof event[bindMethods[i]] != "function"){

          event[bindMethods[i]] = qx.module.event.Native[bindMethods[i]].bind(event);
        };
      };
      event.getCurrentTarget = function(){

        return event.currentTarget || element;
      };
      return event;
    }
  },
  defer : function(statics){

    qxWeb.$registerEventNormalization(statics.TYPES, statics.normalize);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * This is the base collection for all widgets and offers a good foundation
 * for all widgets including enabled state handling, config and template storage
 * and event handling to name a few key features.
 *
 * @require(qx.module.Dataset)
 * @require(qx.module.util.String)
 * @require(qx.module.event.Native)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Widget", {
  extend : qxWeb,
  statics : {
    /**
     * Factory method for the widget which converts a standard
     * collection into a collection of widgets.
     *
     * @return {qx.ui.website.Widget} A collection of widgets.
     *
     * @attach {qxWeb}
     */
    widget : function(){

      var widgets = new qx.ui.website.Widget(this);
      widgets.init();
      return widgets;
    },
    /**
     * Creates a new collection from the given argument. This can either be an
     * HTML string, a single DOM element or an array of elements
     *
     * @param html {String|Element[]} HTML string or DOM element(s)
     * @return {qxWeb} Collection of elements
     */
    create : function(html){

      return new qx.ui.website.Widget(qxWeb.create(html));
    },
    /**
     * Special 'on' method for qx.Website widgets that prevents memory
     * leaks and duplicate listeners.
     *
     * During the lifetime of a widget, multiple collection instances can
     * be created for the same DOM element. In the initialization of each
     * of these widget collections, listeners can be attached using this method
     * to prevent memory leaks and duplicate listeners.
     *
     * This is done by storing a reference to the collection the first time a
     * listener is attached. For subsequent listeners, this stored collection
     * is used as the context. If the context object already has the new listener,
     * it is not attached again. This means that new collections don't create
     * references to DOM elements and don't need to be disposed manually.
     *
     * @attach {qxWeb}
     * @param type {String} Type of the event to listen for
     * @param listener {Function} Listener callback
     * @param ctx {Object?} Context the callback function will be executed in.
     * Default: The element on which the listener was registered
     * @param useCapture {Boolean?} Attach the listener to the capturing
     * phase if true.
     * @return {qxWeb} The collection for chaining
     */
    $onFirstCollection : function(type, listener, ctx, useCapture){

      var propertyName = this.classname.replace(/\./g, "-") + "-context";
      if(!this.getProperty(propertyName)){

        this.setProperty(propertyName, ctx);
      };
      var originalCtx = this.getProperty(propertyName);
      if(!this.hasListener(type, listener, originalCtx)){

        this.on(type, listener, originalCtx, useCapture);
      };
      return this;
    },
    /**
     * Removes a listener added with {@link #$onFirstCollection}.
     *
     * @attach {qxWeb}
     * @param type {String} Type of the event to listen for
     * @param listener {Function} Listener callback
     * @param ctx {Object?} Context the callback function will be executed in.
     * Default: The element on which the listener was registered
     * @param useCapture {Boolean?} Attach the listener to the capturing
     * phase if true. Default: false
     * @return {qxWeb} The collection for chaining
     */
    $offFirstCollection : function(type, listener, ctx, useCapture){

      var propertyName = this.classname.replace(/\./g, "-") + "-context";
      this._forEachElementWrapped(function(item){

        var originalCtx = item.getProperty(propertyName);
        item.off(type, listener, originalCtx, useCapture);
      });
      return this;
    },
    /**
     * Fetches elements with a data attribute named <code>data-qx-class</code>
     * containing the class name of the desired widget and initializes them as
     * widgets.
     *
     * @param selector {String?} Optional selector expression or filter function to
     * restrict the list of elements
     * @attachStatic {qxWeb}
     */
    initWidgets : function(selector){

      var elements = qxWeb("*[data-qx-class]");
      if(selector){

        elements = elements.filter(selector);
      };
      elements._forEachElementWrapped(function(widget){

        widget.init();
      });
    }
  },
  construct : function(selector, context){

    var col = this.base(arguments, selector, context);
    Array.prototype.push.apply(this, Array.prototype.slice.call(col, 0, col.length));
  },
  members : {
    __cssPrefix : null,
    /**
     * Responsible for initializing of the widget. This checks for the data attribute
     * named <code>data-qx-class</code> and initializes the widget if necessary.
     * @return {Boolean} <code>true</code> if the widget has been initialized
     */
    init : function(){

      if(this.getProperty("$$qx-widget-initialized")){

        return false;
      };
      this.setAttribute("data-qx-class", this.classname);
      this.addClass("qx-widget");
      this.addClass(this.getCssPrefix());
      this.setProperty("$$qx-widget-initialized", true);
      return true;
    },
    /**
     * Return the proper CSS prefix for the current widget. This prefix is
     * based on the current classname.
     *
     * @return {String} The CSS prefix for the current object.
     */
    getCssPrefix : function(){

      if(!this.__cssPrefix){

        var split = this.classname.split(".");
        this.__cssPrefix = "qx-" + split[split.length - 1].toLowerCase();
      };
      return this.__cssPrefix;
    },
    /**
     * Changes the enabled state of the current collection, which means all
     * widgets in the collection. This sets the disabled attribute on the
     * elements and all its children.
     *
     * @param value {Boolean} The enabled value.
     * @return {qx.ui.website.Widget} The collection for chaining
     */
    setEnabled : function(value){

      this.setAttribute("disabled", !value);
      this.find("*").setAttribute("disabled", !value);
      return this;
    },
    /**
     * Returns weather the first widget in the collection is enabled or not.
     *
     * @return {Boolean} The enabled state of the collection.
     */
    getEnabled : function(){

      return !this.getAttribute("disabled");
    },
    /**
     * Setter for the widget-specific templates. The available templates can
     * be found in the documentation of the corresponding widget. The templates
     * will be rendered using
     * <a href='https://github.com/janl/mustache.js/'>mustache.js</a>.
     *
     * Please keep in mind to call {@link #render} after you change any
     * template or config setting.
     *
     * @param name {String} The name of the template.
     * @param template {String} The template string.
     *
     * @return {qx.ui.website.Widget} The widget instance for chaining.
     */
    setTemplate : function(name, template){

      return this._setData("templates", name, template);
    },
    /**
     * Setter for the widget-specific config. The available config settings can
     * be found in the documentation of the corresponding widget. Each config
     * setting can be set in the markup as data-attribute, prefixed with
     * <code>data-qx</code> e.g. <code>data-qx-length="5"</code>.
     *
     * Please keep in mind to call {@link #render} after you change any
     * template or config setting.
     *
     * @param name {String} The name of the config setting.
     * @param config {var} The value of the config setting.
     * @return {qx.ui.website.Widget} The widget instance for chaining.
     */
    setConfig : function(name, config){

      return this._setData("config", name, config);
    },
    /**
     * Helper to set either config or template values.
     *
     * @param type {String} Either <code>templates</code> or <code>config</code>.
     * @param name {String} The name for the value to store.
     * @param data {var} The data to store.
     * @return {qx.ui.website.Widget} The widget instance for chaining.
     */
    _setData : function(type, name, data){

      this.forEach(function(item){

        if(!item[type]){

          item[type] = {
          };
        };
        item[type][name] = data;
      });
      return this;
    },
    /**
     * Returns the used template. This includes custom templates
     * as the default templates defined by the widgets.
     *
     * @param name {String} The name of the template.
     * @return {String} The template string or <code>undefined</code>.
     */
    getTemplate : function(name){

      return this._getData("templates", name);
    },
    /**
     * Returns the config setting currently in use for the given widget.
     * This can either be the user set config value, the value set in
     * the markup via data-attribute, the widgets default config value or
     * <code>undefined</code>, if non is set.
     *
     * @param name {String} The name of the config.
     * @return {var} The value of the config or <code>undefined</code>.
     */
    getConfig : function(name){

      return this._getData("config", name);
    },
    /**
     * Internal helper for querying the values for templates and configs. In the
     * case of a config value, the method also reads the corresponding data-attribute
     * for possible values.
     *
     * @param type {String} Either <code>templates</code> or <code>config</code>.
     * @param name {String} The name for the value to fetch.
     * @return {var} The value store for the given arguments.
     */
    _getData : function(type, name){

      var storage = this.getProperty(type);
      var item;
      if(storage){

        item = storage[name];
      };
      if(item === undefined && type == "config"){

        var attribName = "qx" + qxWeb.string.firstUp(type) + qxWeb.string.firstUp(name);
        item = this.getData(attribName);
        // not defined HTML attributes result in 'null' values
        if(!this[0] || (!this[0].dataset && item === null)){

          item = undefined;
        };
        try{

          item = JSON.parse(item);
        } catch(e) {
        };
      };
      if(item === undefined && this.constructor["_" + type]){

        return this.constructor["_" + type][name];
      };
      return item;
    },
    /**
     * The render method is responsible for applying changed config
     * and template settings. This method is usually overridden and specified
     * by the subclassing widgets like the slider or tabs.
     *
     * @return {qx.ui.website.Widget} The widget collection for chaining.
     */
    render : function(){

      // empty method
      return this;
    },
    /**
     * Dispose the widget, making sure all objects are ready for
     * garbage collection. This mainly means deleting connections to the
     * DOM including event listeners.
     * @return {qxWeb} Plain qxWeb collection
     */
    dispose : function(){

      this.removeAttribute("data-qx-class");
      this.setProperty("config", undefined);
      this.setProperty("templates", undefined);
      var contextProperty = this.classname.replace(/\./g, "-") + "-context";
      this.setProperty(contextProperty, undefined);
      this.setProperty("$$qx-widget-initialized", undefined);
      this.removeClass("qx-widget");
      this.removeClass(this.getCssPrefix());
      for(var name in this.constructor.$$events){

        this.allOff(name);
      };
      return qxWeb.$init(this, qxWeb);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      $onFirstCollection : statics.$onFirstCollection,
      $offFirstCollection : statics.$offFirstCollection,
      widget : statics.widget
    });
    qxWeb.$attachStatic({
      initWidgets : statics.initWidgets
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * HTML templating module. This is a wrapper for mustache.js which is a
 * "framework-agnostic way to render logic-free views".
 *
 * Here is a basic example how to use it:
 * <pre class="javascript">
 * var template = "Hi, my name is {{name}}!";
 * var view = {name: "qooxdoo"};
 * q.template.render(template, view);
 *   // return "Hi, my name is qooxdoo!"
 * </pre>
 *
 * For further details, please visit the mustache.js documentation here:
 *   https://github.com/janl/mustache.js/blob/master/README.md
 */
qx.Bootstrap.define("qx.module.Template", {
  statics : {
    /**
     * Helper method which provides direct access to templates stored as HTML in
     * the DOM. The DOM node with the given ID will be treated as a template,
     * parsed and a new DOM element will be returned containing the parsed data.
     * Keep in mind that templates can only have one root element.
     * Additionally, you should not put the template into a regular, hidden
     * DOM element because the template may not be valid HTML due to the containing
     * mustache tags. We suggest to put it into a script tag with the type
     * <code>text/template</code>.
     *
     * @attachStatic{qxWeb, template.get}
     * @param id {String} The id of the HTML template in the DOM.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {qxWeb} Collection containing a single DOM element with the parsed
     * template data.
     */
    get : function(id, view, partials){

      var el = qx.bom.Template.get(id, view, partials);
      el = qx.module.Template.__wrap(el);
      return qxWeb.$init([el], qxWeb);
    },
    /**
     * Original and only template method of mustache.js. For further
     * documentation, please visit <a href="https://github.com/janl/mustache.js">mustache.js</a>.
     *
     * @attachStatic{qxWeb, template.render}
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {String} The parsed template.
     */
    render : function(template, view, partials){

      return qx.bom.Template.render(template, view, partials);
    },
    /**
     * Combines {@link #render} and {@link #get}. Input is equal to {@link #render}
     * and output is equal to {@link #get}. The advantage over {@link #get}
     * is that you don't need a HTML template but can use a template
     * string and still get a collection. Keep in mind that templates
     * can only have one root element.
     *
     * @attachStatic{qxWeb, template.renderToNode}
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {qxWeb} Collection containing a single DOM element with the parsed
     * template data.
     */
    renderToNode : function(template, view, partials){

      var el = qx.bom.Template.renderToNode(template, view, partials);
      el = qx.module.Template.__wrap(el);
      return qxWeb.$init([el], qxWeb);
    },
    /**
     * If the given node is a DOM text node, wrap it in a span element and return
     * the wrapper.
     * @param el {Node} a DOM node
     * @return {Element} Original element or wrapper
     */
    __wrap : function(el){

      if(qxWeb.isTextNode(el)){

        var wrapper = document.createElement("span");
        wrapper.appendChild(el);
        el = wrapper;
      };
      return el;
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "template" : {
        get : statics.get,
        render : statics.render,
        renderToNode : statics.renderToNode
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

   ======================================================================

   This class contains code based on the following work:

   * Mustache.js version 0.8.1

     Code:
       https://github.com/janl/mustache.js

     Copyright:
       (c) 2009 Chris Wanstrath (Ruby)
       (c) 2010 Jan Lehnardt (JavaScript)

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

   ----------------------------------------------------------------------

    The MIT License

    Copyright (c) 2009 Chris Wanstrath (Ruby)
    Copyright (c) 2010 Jan Lehnardt (JavaScript)

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation files
    (the "Software"), to deal in the Software without restriction,
    including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

************************************************************************ */
/**
 * The is a template class which can be used for HTML templating. In fact,
 * this is a wrapper for mustache.js which is a "framework-agnostic way to
 * render logic-free views".
 *
 * Here is a basic example how to use it:
 * Template:
 * <pre class="javascript">
 * var template = "Hi, my name is {{name}}!";
 * var view = {name: "qooxdoo"};
 * qx.bom.Template.render(template, view);
 * // return "Hi, my name is qooxdoo!"
 * </pre>
 *
 * For further details, please visit the mustache.js documentation here:
 *   https://github.com/janl/mustache.js/blob/master/README.md
 *
 * @ignore(module)
 */
qx.Bootstrap.define("qx.bom.Template", {
  statics : {
    /** Contains the mustache.js version. */
    version : null,
    /**
     * Original and only template method of mustache.js. For further
     * documentation, please visit https://github.com/janl/mustache.js
     *
     * @signature function(template, view, partials)
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {String} The parsed template.
     */
    render : null,
    /**
     * Combines {@link #render} and {@link #get}. Input is equal to {@link #render}
     * and output is equal to {@link #get}. The advantage over {@link #get}
     * is that you don't need a HTML template but can use a template
     * string and still get a DOM element. Keep in mind that templates
     * can only have one root element.
     *
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    renderToNode : function(template, view, partials){

      var renderedTmpl = this.render(template, view, partials);
      return this._createNodeFromTemplate(renderedTmpl);
    },
    /**
     * Helper method which provides you with a direct access to templates
     * stored as HTML in the DOM. The DOM node with the given ID will be used
     * as a template, parsed and a new DOM node will be returned containing the
     * parsed data. Keep in mind to have only one root DOM element in the the
     * template.
     * Additionally, you should not put the template into a regular, hidden
     * DOM element because the template may not be valid HTML due to the containing
     * mustache tags. We suggest to put it into a script tag with the type
     * <code>text/template</code>.
     *
     * @param id {String} The id of the HTML template in the DOM.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    get : function(id, view, partials){

      // get the content stored in the DOM
      var template = document.getElementById(id);
      return this.renderToNode(template.innerHTML, view, partials);
    },
    /**
     * Accepts a parsed template and returns a (potentially nested) node.
     *
     * @param template {String} The String containing the template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    _createNodeFromTemplate : function(template){

      // template is text only (no html elems) so use text node
      if(template.search(/<|>/) === -1){

        return document.createTextNode(template);
      };
      // template has html elems so convert string into DOM nodes
      var helper = qx.dom.Element.create("div");
      helper.innerHTML = template;
      return helper.children[0];
    }
  }
});
(function(){

  // prevent using CommonJS exports object,
  // by shadowing global exports object
  var exports;
  // prevent using AMD compatible loader,
  // by shadowing global define function
  var define;
  /**
   * Below is the original mustache.js code. Snapshot date is mentioned in
   * the head of this file.
   * @ignore(exports)
   * @ignore(define.*)
   * @ignore(module.*)
   * @lint ignoreNoLoopBlock()
   */
  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */
  /*global define: false*/
  (function(root, factory){

    if(typeof exports === "object" && exports){

      factory(exports);
    } else {

      var mustache = {
      };
      factory(mustache);
      if(typeof define === "function" && define.amd){

        define(mustache);
      } else {

        root.Mustache = mustache;
      };
    };
  }(this, function(mustache){

    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var nonSpaceRe = /\S/;
    var eqRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var RegExp_test = RegExp.prototype.test;
    function testRegExp(re, string){

      return RegExp_test.call(re, string);
    };
    function isWhitespace(string){

      return !testRegExp(nonSpaceRe, string);
    };
    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function(object){

      return Object_toString.call(object) === '[object Array]';
    };
    function isFunction(object){

      return typeof object === 'function';
    };
    function escapeRegExp(string){

      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    };
    var entityMap = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : '&quot;',
      "'" : '&#39;',
      "/" : '&#x2F;'
    };
    function escapeHtml(string){

      return String(string).replace(/[&<>"'\/]/g, function(s){

        return entityMap[s];
      });
    };
    function escapeTags(tags){

      if(!isArray(tags) || tags.length !== 2){

        throw new Error('Invalid tags: ' + tags);
      };
      return [new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1]))];
    };
    /**
     * Breaks up the given `template` string into a tree of tokens. If the `tags`
     * argument is given here it must be an array with two string values: the
     * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
     * course, the default is to use mustaches (i.e. mustache.tags).
     *
     * A token is an array with at least 4 elements. The first element is the
     * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
     * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
     * all template text that appears outside a symbol this element is "text".
     *
     * The second element of a token is its "value". For mustache tags this is
     * whatever else was inside the tag besides the opening symbol. For text tokens
     * this is the text itself.
     *
     * The third and fourth elements of the token are the start and end indices
     * in the original template of the token, respectively.
     *
     * Tokens that are the root node of a subtree contain two more elements: an
     * array of tokens in the subtree and the index in the original template at which
     * the closing tag for that section begins.
     */
    function parseTemplate(template, tags){

      tags = tags || mustache.tags;
      template = template || '';
      if(typeof tags === 'string'){

        tags = tags.split(spaceRe);
      };
      var tagRes = escapeTags(tags);
      var scanner = new Scanner(template);
      var sections = [];
      // Stack to hold section tokens
      var tokens = [];
      // Buffer to hold the tokens
      var spaces = [];
      // Indices of whitespace tokens on the current line
      var hasTag = false;
      // Is there a {{tag}} on the current line?
      var nonSpace = false;
      // Is there a non-space char on the current line?
      // Strips all whitespace tokens array for the current line
      // if there was a {{#tag}} on it and otherwise only space.
      function stripSpace(){

        if(hasTag && !nonSpace){

          while(spaces.length){

            delete tokens[spaces.pop()];
          };
        } else {

          spaces = [];
        };
        hasTag = false;
        nonSpace = false;
      };
      var start,type,value,chr,token,openSection;
      while(!scanner.eos()){

        start = scanner.pos;
        // Match any text between tags.
        value = scanner.scanUntil(tagRes[0]);
        if(value){

          for(var i = 0,len = value.length;i < len;++i){

            chr = value.charAt(i);
            if(isWhitespace(chr)){

              spaces.push(tokens.length);
            } else {

              nonSpace = true;
            };
            tokens.push(['text', chr, start, start + 1]);
            start += 1;
            // Check for whitespace on the current line.
            if(chr === '\n'){

              stripSpace();
            };
          };
        };
        // Match the opening tag.
        if(!scanner.scan(tagRes[0]))break;
        hasTag = true;
        // Get the tag type.
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        // Get the tag value.
        if(type === '='){

          value = scanner.scanUntil(eqRe);
          scanner.scan(eqRe);
          scanner.scanUntil(tagRes[1]);
        } else if(type === '{'){

          value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
          scanner.scan(curlyRe);
          scanner.scanUntil(tagRes[1]);
          type = '&';
        } else {

          value = scanner.scanUntil(tagRes[1]);
        };
        // Match the closing tag.
        if(!scanner.scan(tagRes[1])){

          throw new Error('Unclosed tag at ' + scanner.pos);
        };
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if(type === '#' || type === '^'){

          sections.push(token);
        } else if(type === '/'){

          // Check section nesting.
          openSection = sections.pop();
          if(!openSection){

            throw new Error('Unopened section "' + value + '" at ' + start);
          };
          if(openSection[1] !== value){

            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
          };
        } else if(type === 'name' || type === '{' || type === '&'){

          nonSpace = true;
        } else if(type === '='){

          // Set the tags for the next time around.
          tagRes = escapeTags(tags = value.split(spaceRe));
        };;;
      };
      // Make sure there are no open sections when we're done.
      openSection = sections.pop();
      if(openSection){

        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      };
      return nestTokens(squashTokens(tokens));
    };
    /**
     * Combines the values of consecutive text tokens in the given `tokens` array
     * to a single token.
     */
    function squashTokens(tokens){

      var squashedTokens = [];
      var token,lastToken;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        if(token){

          if(token[0] === 'text' && lastToken && lastToken[0] === 'text'){

            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {

            squashedTokens.push(token);
            lastToken = token;
          };
        };
      };
      return squashedTokens;
    };
    /**
     * Forms the given array of `tokens` into a nested tree structure where
     * tokens that represent a section have two additional items: 1) an array of
     * all tokens that appear in that section and 2) the index in the original
     * template that represents the end of that section.
     */
    function nestTokens(tokens){

      var nestedTokens = [];
      var collector = nestedTokens;
      var sections = [];
      var token,section;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        switch(token[0]){case '#':case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;default:
        collector.push(token);};
      };
      return nestedTokens;
    };
    /**
     * A simple string scanner that is used by the template parser to find
     * tokens in template strings.
     */
    function Scanner(string){

      this.string = string;
      this.tail = string;
      this.pos = 0;
    };
    /**
     * Returns `true` if the tail is empty (end of string).
     */
    Scanner.prototype.eos = function(){

      return this.tail === "";
    };
    /**
     * Tries to match the given regular expression at the current position.
     * Returns the matched text if it can match, the empty string otherwise.
     */
    Scanner.prototype.scan = function(re){

      var match = this.tail.match(re);
      if(match && match.index === 0){

        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
      };
      return "";
    };
    /**
     * Skips all text until the given regular expression can be matched. Returns
     * the skipped string, which is the entire tail if no match can be made.
     */
    Scanner.prototype.scanUntil = function(re){

      var index = this.tail.search(re),match;
      switch(index){case -1:
      match = this.tail;
      this.tail = "";
      break;case 0:
      match = "";
      break;default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);};
      this.pos += match.length;
      return match;
    };
    /**
     * Represents a rendering context by wrapping a view object and
     * maintaining a reference to the parent context.
     */
    function Context(view, parentContext){

      this.view = view == null ? {
      } : view;
      this.cache = {
        '.' : this.view
      };
      this.parent = parentContext;
    };
    /**
     * Creates a new context using the given view with this context
     * as the parent.
     */
    Context.prototype.push = function(view){

      return new Context(view, this);
    };
    /**
     * Returns the value of the given name in this context, traversing
     * up the context hierarchy if the value is absent in this context's view.
     */
    Context.prototype.lookup = function(name){

      var value;
      if(name in this.cache){

        value = this.cache[name];
      } else {

        var context = this;
        while(context){

          if(name.indexOf('.') > 0){

            value = context.view;
            var names = name.split('.'),i = 0;
            while(value != null && i < names.length){

              value = value[names[i++]];
            };
          } else {

            value = context.view[name];
          };
          if(value != null)break;
          context = context.parent;
        };
        this.cache[name] = value;
      };
      if(isFunction(value)){

        value = value.call(this.view);
      };
      return value;
    };
    /**
     * A Writer knows how to take a stream of tokens and render them to a
     * string, given a context. It also maintains a cache of templates to
     * avoid the need to parse the same template twice.
     */
    function Writer(){

      this.cache = {
      };
    };
    /**
     * Clears all cached templates in this writer.
     */
    Writer.prototype.clearCache = function(){

      this.cache = {
      };
    };
    /**
     * Parses and caches the given `template` and returns the array of tokens
     * that is generated from the parse.
     */
    Writer.prototype.parse = function(template, tags){

      var cache = this.cache;
      var tokens = cache[template];
      if(tokens == null){

        tokens = cache[template] = parseTemplate(template, tags);
      };
      return tokens;
    };
    /**
     * High-level method that is used to render the given `template` with
     * the given `view`.
     *
     * The optional `partials` argument may be an object that contains the
     * names and templates of partials that are used in the template. It may
     * also be a function that is used to load partial templates on the fly
     * that takes a single argument: the name of the partial.
     */
    Writer.prototype.render = function(template, view, partials){

      var tokens = this.parse(template);
      var context = (view instanceof Context) ? view : new Context(view);
      return this.renderTokens(tokens, context, partials, template);
    };
    /**
     * Low-level method that renders the given array of `tokens` using
     * the given `context` and `partials`.
     *
     * Note: The `originalTemplate` is only ever used to extract the portion
     * of the original template that was contained in a higher-order section.
     * If the template doesn't use higher-order sections, this argument may
     * be omitted.
     */
    Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate){

      var buffer = '';
      // This function is used to render an arbitrary template
      // in the current context by higher-order sections.
      var self = this;
      function subRender(template){

        return self.render(template, context, partials);
      };
      var token,value;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        switch(token[0]){case '#':
        value = context.lookup(token[1]);
        if(!value)continue;
        if(isArray(value)){

          for(var j = 0,jlen = value.length;j < jlen;++j){

            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          };
        } else if(typeof value === 'object' || typeof value === 'string'){

          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if(isFunction(value)){

          if(typeof originalTemplate !== 'string'){

            throw new Error('Cannot use higher-order sections without the original template');
          };
          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
          if(value != null)buffer += value;
        } else {

          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        };;
        break;case '^':
        value = context.lookup(token[1]);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if(!value || (isArray(value) && value.length === 0)){

          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        };
        break;case '>':
        if(!partials)continue;
        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if(value != null)buffer += this.renderTokens(this.parse(value), context, partials, value);
        break;case '&':
        value = context.lookup(token[1]);
        if(value != null)buffer += value;
        break;case 'name':
        value = context.lookup(token[1]);
        if(value != null)buffer += mustache.escape(value);
        break;case 'text':
        buffer += token[1];
        break;};
      };
      return buffer;
    };
    mustache.name = "mustache.js";
    mustache.version = "0.8.1";
    mustache.tags = ["{{", "}}"];
    // All high-level mustache.* functions use this writer.
    var defaultWriter = new Writer();
    /**
     * Clears all cached templates in the default writer.
     */
    mustache.clearCache = function(){

      return defaultWriter.clearCache();
    };
    /**
     * Parses and caches the given template in the default writer and returns the
     * array of tokens it contains. Doing this ahead of time avoids the need to
     * parse templates on the fly as they are rendered.
     */
    mustache.parse = function(template, tags){

      return defaultWriter.parse(template, tags);
    };
    /**
     * Renders the `template` with the given `view` and `partials` using the
     * default writer.
     */
    mustache.render = function(template, view, partials){

      return defaultWriter.render(template, view, partials);
    };
    // This is here for backwards compatibility with 0.4.x.
    mustache.to_html = function(template, view, partials, send){

      var result = mustache.render(template, view, partials);
      if(isFunction(send)){

        send(result);
      } else {

        return result;
      };
    };
    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;
    // Export these mainly for testing, but also for advanced usage.
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
  }));
  /**
   * Above is the original mustache code.
   */
  // EXPOSE qooxdoo variant
  qx.bom.Template.version = this.Mustache.version;
  qx.bom.Template.render = this.Mustache.render;
}).call({
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013-2014 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * A row of buttons used to switch between connected pages. The buttons can be
 * right- or left-aligned, or they can be justified, i.e. they will be stretched
 * to fill the available width.
 *
 * <h2>Markup</h2>
 * Each Tabs widget contains an unordered list element (<code>ul</code>), which
 * will be created if not already present.
 * The tabs are list items (<code>li</code>). Each tab can contain
 * a button with a <code>tabsPage</code> data attribute where the value is a
 * CSS selector string identifying the corresponding page. Headers and pages
 * will not be created automatically. They can be predefined in the DOM before
 * the <code>q().tabs()</code> factory method is called, or added programmatically.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-tabs</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Tabs widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-horizontal</code></td>
 *       <td>Container element</td>
 *       <td>Styles the widget in horizontal orientation</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-vertical</code></td>
 *       <td>Container element</td>
 *       <td>Styles the widget in vertical orientation</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-container</code></td>
 *       <td>Tab page container (<code>div</code>)</td>
 *       <td>Styles the tab pages' container (horizontal orientation only)</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-flex-justify-end</code></td>
 *       <td>Tab container (<code>ul</code>)</td>
 *       <td>Browsers with flexbox support only: Styles the tab buttons when they are right-aligned</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-left</code></td>
 *       <td>Container element</td>
 *       <td>Internet Explorer < 10 only: Styles the tab buttons when they are left-aligned</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-justify</code></td>
 *       <td>Container element</td>
 *       <td>Internet Explorer < 10 only: Styles the tab buttons when they are stretched to fill out the available width</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-right</code></td>
 *       <td>Container element</td>
 *       <td>Internet Explorer < 10 only: Styles the tab buttons when they are right-aligned</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-button</code></td>
 *       <td>Tab button (<code>li</code>)</td>
 *       <td>Identifies and styles the tabs</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-button-active</code></td>
 *       <td>Tab button (<code>li</code>)</td>
 *       <td>Identifies and styles the currently selected tab. Applied in addition to <code>qx-tabs-button</code></td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-flex-1</code></td>
 *       <td>Tab button (<code>li</code>)</td>
 *       <td>Browsers with flexbox support only: Styles the tab buttons when they are stretched to fill out the available width</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-page</code></td>
 *       <td>Tab page (<code>div</code> in horizontal mode, <code>li</code>)</td>
 *       <td>Styles the tab pages.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @require(qx.module.Template)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Tabs", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * Factory method which converts the current collection into a collection of
     * tabs widgets.
     *
     * @attach{qxWeb}
     * @param align {String?} Tab button alignment. Default: <code>left</code>
     * @param preselected {Integer?} The (zero-based) index of the tab that
     * should initially be selected. Default: <code>0</code>
     * @param orientation {String?} <code>horizontal</code> (default) or <code>vertical</code>
     * @return {qx.ui.website.Tabs}
     */
    tabs : function(align, preselected, orientation){

      var tabs = new qx.ui.website.Tabs(this);
      if(typeof preselected !== "undefined"){

        tabs.setConfig("preselected", preselected);
      };
      tabs.init();
      if(align){

        tabs.setConfig("align", align);
      };
      if(orientation){

        tabs.setConfig("orientation", orientation);
      };
      if(align || orientation){

        tabs.render();
      };
      return tabs;
    },
    /**
     * *button*
     *
     * Template used by {@link #addButton} to create a new button.
     *
     * Default value: <pre><li><button>{{{content}}}</button></li></pre>
     */
    _templates : {
      button : "<li><button>{{{content}}}</button></li>"
    },
    /**
     * *preselected*
     * The index of the page that should be opened after initial
     * rendering, or <code>null</code> if no page should be opened.
     *
     * Default value: <pre>0</pre>
     *
     * *align*
     * Configuration for the alignment of the tab buttons in horizontal
     * mode. This possible values are <code>left</code>,
     * <code>justify</code> and
     * <code>right</code>
     *
     * Default value: <pre>left</pre>
     *
     * *orientation*
     * Controls the layout of the widget. "horizontal" renders it as a
     * tab bar appropriate for wide screens. "vertical" renders it as a
     * stack of collapsible panes (sometimes called an accordion) that
     * is better suited for narrow screens.
     *
     * *mediaQuery*
     * A CSS media query string that will be used with a
     * media query listener to dynamically set the widget's
     * orientation. The widget will be rendered in vertical mode unless
     * the query matches.
     */
    _config : {
      preselected : 0,
      align : "left",
      orientation : "horizontal",
      mediaQuery : null
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  events : {
    /**
     * Fired when the selected page has changed. The value is
     * the newly selected page's index
     */
    "changeSelected" : "Number"
  },
  members : {
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var mediaQuery = this.getConfig("mediaQuery");
      if(mediaQuery){

        this.setConfig("orientation", this._initMediaQueryListener(mediaQuery));
      };
      var orientation = this.getConfig("orientation");
      this._forEachElementWrapped(function(tabs){

        tabs.addClasses([this.getCssPrefix(), this.getCssPrefix() + "-" + orientation]);
        if(tabs.getChildren("ul").length === 0){

          var list = qxWeb.create("<ul/>");
          var content = tabs.getChildren();
          if(content.length > 0){

            list.insertBefore(content.eq(0));
          } else {

            tabs.append(list);
          };
        };
        var container = tabs.find("> ." + this.getCssPrefix() + "-container");
        var buttons = tabs.getChildren("ul").getFirst().getChildren("li").not("." + this.getCssPrefix() + "-page");
        buttons._forEachElementWrapped(function(button){

          button.addClass(this.getCssPrefix() + "-button");
          var pageSelector = button.getData(this.getCssPrefix() + "-page");
          if(!pageSelector){

            return;
          };
          button.addClass(this.getCssPrefix() + "-button").$onFirstCollection("tap", this._onTap, tabs);
          var page = tabs._getPage(button);
          if(page.length > 0){

            page.addClass(this.getCssPrefix() + "-page");
            if(orientation == "vertical"){

              this.__deactivateTransition(page);
              if(q.getNodeName(page[0]) == "div"){

                var li = q.create("<li>").addClass(this.getCssPrefix() + "-page").setAttribute("id", page.getAttribute("id")).insertAfter(button[0]);
                page.remove().getChildren().appendTo(li);
                page = li;
              };
              this._storePageHeight(page);
            } else if(orientation == "horizontal"){

              if(q.getNodeName(page[0]) == "li"){

                var div = q.create("<div>").addClass(this.getCssPrefix() + "-page").setAttribute("id", page.getAttribute("id"));
                page.remove().getChildren().appendTo(div);
                page = div;
              };
            };
            if(orientation == "horizontal"){

              if(container.length === 0){

                container = qxWeb.create("<div class='" + this.getCssPrefix() + "-container'>").insertAfter(tabs.find("> ul")[0]);
              };
              page.appendTo(container[0]);
            };
          };
          this._showPage(null, button);
          this.__activateTransition(page);
        }.bind(this));
        if(orientation == "vertical" && container.length == 1 && container.getChildren().length === 0){

          container.remove();
        };
        if(orientation == "horizontal" && this.getConfig("align") == "right" && q.env.get("engine.name") == "mshtml" && q.env.get("browser.documentmode") < 10){

          buttons.remove();
          for(var i = buttons.length - 1;i >= 0;i--){

            tabs.find("> ul").append(buttons[i]);
          };
        };
        var active = buttons.filter("." + this.getCssPrefix() + "-button-active");
        var preselected = this.getConfig("preselected");
        if(active.length === 0 && typeof preselected == "number"){

          active = buttons.eq(preselected).addClass(this.getCssPrefix() + "-button-active");
        };
        if(active.length > 0){

          var activePage = this._getPage(active);
          this.__deactivateTransition(activePage);
          this._showPage(active, null);
          this.__activateTransition(activePage);
        };
        tabs.getChildren("ul").getFirst().$onFirstCollection("keydown", this._onKeyDown, this);
        if(orientation === "horizontal"){

          this._applyAlignment(tabs);
        };
        qxWeb(window).on("resize", tabs._onResize, tabs);
      }.bind(this));
      return true;
    },
    render : function(){

      var mediaQuery = this.getConfig("mediaQuery");
      if(mediaQuery){

        this.setConfig("orientation", this._initMediaQueryListener(mediaQuery));
      };
      var orientation = this.getConfig("orientation");
      if(orientation === "horizontal"){

        return this._renderHorizontal();
      } else if(orientation === "vertical"){

        return this._renderVertical();
      };
    },
    /**
     * Initiates a media query listener for dynamic orientation switching
     * @param mediaQuery {String} CSS media query string
     * @return {String} The appropriate orientation: "horizontal" if the
     * media query matches, "vertical" if it doesn't
     */
    _initMediaQueryListener : function(mediaQuery){

      var mql = this.getProperty("mediaQueryListener");
      if(!mql){

        mql = q.matchMedia(mediaQuery);
        this.setProperty("mediaQueryListener", mql);
        mql.on("change", function(query){

          this.render();
        }.bind(this));
      };
      if(mql.matches){

        return "horizontal";
      } else {

        return "vertical";
      };
    },
    /**
     * Render the widget in horizontal mode
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    _renderHorizontal : function(){

      this._forEachElementWrapped(function(tabs){

        tabs.removeClass(this.getCssPrefix() + "-vertical").addClasses([this.getCssPrefix() + "", this.getCssPrefix() + "-horizontal", "qx-flex-ready"]).find("> ul").addClass("qx-hbox");
        var container = tabs.find("> ." + this.getCssPrefix() + "-container");
        if(container.length == 0){

          container = qxWeb.create("<div class='" + this.getCssPrefix() + "-container'>").insertAfter(tabs.find("> ul")[0]);
        };
        var selectedPage;
        tabs.find("> ul > ." + this.getCssPrefix() + "-button")._forEachElementWrapped(function(li){

          var page = qxWeb(li.getData(this.getCssPrefix() + "-page"));
          if(q.getNodeName(page[0]) == "li"){

            var div = q.create("<div>").addClass(this.getCssPrefix() + "-page").setAttribute("id", page.getAttribute("id"));
            page.remove().getChildren().appendTo(div);
            page = div;
          };
          page.appendTo(container[0]);
          tabs._switchPages(page, null);
          if(li.hasClass(this.getCssPrefix() + "-button-active")){

            selectedPage = page;
          };
        }.bind(this));
        if(!selectedPage){

          var firstButton = tabs.find("> ul > ." + this.getCssPrefix() + "-button").eq(0).addClass(this.getCssPrefix() + "-button-active");
          selectedPage = this._getPage(firstButton);
        };
        tabs._switchPages(null, selectedPage);
        this._applyAlignment(tabs);
      });
      this.setEnabled(this.getEnabled());
      return this;
    },
    /**
     * Render the widget in vertical mode
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    _renderVertical : function(){

      this._forEachElementWrapped(function(tabs){

        tabs.find("> ul.qx-hbox").removeClass("qx-hbox");
        tabs.removeClasses([this.getCssPrefix() + "-horizontal", "qx-flex-ready"]).addClasses([this.getCssPrefix() + "", this.getCssPrefix() + "-vertical"]).getChildren("ul").getFirst().getChildren("li").not("." + this.getCssPrefix() + "-page")._forEachElementWrapped(function(button){

          button.addClass(this.getCssPrefix() + "-button");
          var page = this._getPage(button);
          if(page.length === 0){

            return;
          };
          this.__deactivateTransition(page);
          if(q.getNodeName(page[0]) == "div"){

            var li = q.create("<li>").addClass(this.getCssPrefix() + "-page").setAttribute("id", page.getAttribute("id"));
            page.getChildren().appendTo(li);
            li.insertAfter(button[0]);
            page.remove();
            page = li;
          };
          this._storePageHeight(page);
          if(button.hasClass(this.getCssPrefix() + "-button-active")){

            this._switchPages(null, page);
          } else {

            this._switchPages(page, null);
          };
          this.__activateTransition(page);
        }.bind(this));
      }.bind(this));
      this.setEnabled(this.getEnabled());
      return this;
    },
    /**
     * Re-render on browser window resize (page heights must be re-
     * calculated)
     */
    _onResize : function(){

      // make sure this runs after a MediaQueryListener callback
      // which might have changed the orientation
      setTimeout(function(){

        if(this.getConfig("orientation") == "vertical"){

          this._renderVertical();
        };
      }.bind(this), 100);
    },
    /**
     * Adds a new tab button
     *
     * @param label {String} The button's content. Can include markup.
     * @param pageSelector {String} CSS Selector that identifies the associated page
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    addButton : function(label, pageSelector){

      this._forEachElementWrapped(function(item){

        var link = qxWeb.create(qxWeb.template.render(item.getTemplate("button"), {
          content : label
        })).addClass(this.getCssPrefix() + "-button");
        var list = item.find("> ul");
        var links = list.getChildren("li");
        if(list.hasClass(this.getCssPrefix() + "-right") && links.length > 0){

          link.insertBefore(links.getFirst());
        } else {

          link.appendTo(list);
        };
        link.$onFirstCollection("tap", this._onTap, item).addClass(this.getCssPrefix() + "-button");
        if(item.find("> ul ." + this.getCssPrefix() + "-button").length === 1){

          link.addClass(this.getCssPrefix() + "-button-active");
        };
        if(pageSelector){

          link.setData(this.getCssPrefix() + "-page", pageSelector);
          var page = this._getPage(link);
          page.addClass(this.getCssPrefix() + "-page");
          if(link.hasClass(this.getCssPrefix() + "-button-active")){

            this._switchPages(null, page);
          } else {

            this._switchPages(page, null);
          };
        };
      }, this);
      return this;
    },
    /**
     * Selects a tab button
     *
     * @param index {Integer} index of the button to select
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    select : function(index){

      this._forEachElementWrapped(function(tabs){

        var buttons = tabs.find("> ul > ." + this.getCssPrefix() + "-button");
        var oldButton = tabs.find("> ul > ." + this.getCssPrefix() + "-button-active").removeClass(this.getCssPrefix() + "-button-active");
        if(this.getConfig("align") == "right"){

          index = buttons.length - 1 - index;
        };
        var newButton = buttons.eq(index).addClass(this.getCssPrefix() + "-button-active");
        tabs._showPage(newButton, oldButton);
        tabs.emit("changeSelected", index);
      });
      return this;
    },
    /**
     * Initiates the page switch when a button was clicked/tapped
     *
     * @param e {Event} Tap event
     */
    _onTap : function(e){

      if(!this.getEnabled()){

        return;
      };
      var orientation = this.getConfig("orientation");
      var tappedButton = e.getCurrentTarget();
      this._forEachElementWrapped(function(tabs){

        var oldButton = tabs.find("> ul > ." + this.getCssPrefix() + "-button-active");
        if(oldButton[0] == tappedButton && orientation == "horizontal"){

          return;
        };
        oldButton.removeClass(this.getCssPrefix() + "-button-active");
        if(orientation == "vertical"){

          this._showPage(null, oldButton);
          if(oldButton[0] == tappedButton && orientation == "vertical"){

            return;
          };
        };
        var newButton;
        var buttons = tabs.find("> ul > ." + this.getCssPrefix() + "-button")._forEachElementWrapped(function(button){

          if(tappedButton === button[0]){

            newButton = button;
          };
        });
        tabs._showPage(newButton, oldButton);
        newButton.addClass(this.getCssPrefix() + "-button-active");
        var index = buttons.indexOf(newButton[0]);
        if(this.getConfig("align") == "right"){

          index = buttons.length - 1 - index;
        };
        tabs.emit("changeSelected", index);
      });
    },
    /**
     * Allows tab selection using the left and right arrow keys
     *
     * @param e {Event} keydown event
     */
    _onKeyDown : function(e){

      var key = e.getKeyIdentifier();
      if(!(key == "Left" || key == "Right")){

        return;
      };
      var rightAligned = this.getConfig("align") == "right";
      var buttons = this.find("> ul > ." + this.getCssPrefix() + "-button");
      if(rightAligned){

        buttons.reverse();
      };
      var active = this.find("> ul > ." + this.getCssPrefix() + "-button-active");
      var next;
      if(key == "Right"){

        if(!rightAligned){

          next = active.getNext("." + this.getCssPrefix() + "-button");
        } else {

          next = active.getPrev("." + this.getCssPrefix() + "-button");
        };
      } else {

        if(!rightAligned){

          next = active.getPrev("." + this.getCssPrefix() + "-button");
        } else {

          next = active.getNext("." + this.getCssPrefix() + "-button");
        };
      };
      if(next.length > 0){

        var idx = buttons.indexOf(next);
        this.select(idx);
        next.getChildren("button").focus();
      };
    },
    /**
     * Initiates the page switch if a tab button is selected
     *
     * @param newButton {qxWeb} selected button
     * @param oldButton {qxWeb} previously active button
     */
    _showPage : function(newButton, oldButton){

      var oldPage = this._getPage(oldButton);
      var newPage = this._getPage(newButton);
      if(this.getConfig("orientation") === "horizontal" && (oldPage[0] == newPage[0])){

        return;
      };
      this._switchPages(oldPage, newPage);
    },
    /**
     * Executes a page switch
     *
     * @param oldPage {qxWeb} the previously selected page
     * @param newPage {qxWeb} the newly selected page
     */
    _switchPages : function(oldPage, newPage){

      var orientation = this.getConfig("orientation");
      if(orientation === "horizontal"){

        if(oldPage){

          oldPage.hide();
        };
        if(newPage){

          newPage.show();
        };
      } else if(orientation === "vertical"){

        if(oldPage && oldPage.length > 0){

          oldPage.setStyle("height", oldPage.getHeight() + "px");
          oldPage[0].offsetHeight;
          oldPage.setStyles({
            "height" : "0px",
            "paddingTop" : "0px",
            "paddingBottom" : "0px"
          });
          oldPage.addClass(this.getCssPrefix() + "-page-closed");
        };
        if(newPage && newPage.length > 0){

          newPage.removeClass(this.getCssPrefix() + "-page-closed");
          if(!newPage.getStyle("transition") || newPage.getStyle("transition").indexOf("none") === 0){

            newPage.setStyle("height", "");
          } else {

            var openedHeight = newPage.getProperty("openedHeight");
            if(qxWeb.type.get(openedHeight) == "String"){

              newPage.setStyle("height", openedHeight);
            };
          };
        };
      };
    },
    /**
     * Returns the tab page associated with the given button
     *
     * @param button {qxWeb} Tab button
     * @return {qxWeb} Tab page
     */
    _getPage : function(button){

      var pageSelector;
      if(button){

        pageSelector = button.getData(this.getCssPrefix() + "-page");
      };
      return qxWeb(pageSelector);
    },
    /**
     * Apply the CSS classes for the alignment
     *
     * @param tabs {qx.ui.website.Tabs[]} tabs collection
     */
    _applyAlignment : function(tabs){

      var align = tabs.getConfig("align");
      var buttons = tabs.find("> ul > li");
      if(q.env.get("engine.name") == "mshtml" && q.env.get("browser.documentmode") < 10){

        if(align == "left"){

          tabs.addClass(this.getCssPrefix() + "-left");
        } else {

          tabs.removeClass(this.getCssPrefix() + "-left");
        };
        if(align == "justify"){

          tabs.addClass(this.getCssPrefix() + "-justify");
        } else {

          tabs.removeClass(this.getCssPrefix() + "-justify");
        };
        if(align == "right"){

          tabs.addClass(this.getCssPrefix() + "-right");
        } else {

          tabs.removeClass(this.getCssPrefix() + "-right");
        };
      } else {

        tabs.addClass("qx-flex-ready").find("> ul").addClass("qx-hbox");
        if(align == "justify"){

          buttons.addClass("qx-flex1");
        } else {

          buttons.removeClass("qx-flex1");
        };
        if(align == "right"){

          tabs.find("> ul").addClass("qx-flex-justify-end");
        } else {

          tabs.find("> ul").removeClass("qx-flex-justify-end");
        };
      };
    },
    /**
     * Stores the page's natural height for the page opening transition
     * @param page {qxWeb} page
     */
    _storePageHeight : function(page){

      var closedClass = this.getCssPrefix() + "-page-closed";
      var isClosed = page.hasClass(closedClass);
      if(isClosed){

        page.removeClass(this.getCssPrefix() + "-page-closed");
      };
      var prevDisplay = page[0].style.display;
      var prevHeight = page[0].style.height;
      page[0].style.height = "";
      page[0].style.display = "block";
      page.setProperty("openedHeight", page.getHeight() + "px");
      if(isClosed){

        page.addClass(this.getCssPrefix() + "-page-closed");
      };
      page[0].style.height = prevHeight;
      page[0].style.display = prevDisplay;
    },
    /**
     * Stores an element's CSS transition styles in a property
     * and removes them from the style declaration
     *
     * @param elem {qxWeb} Element
     */
    __deactivateTransition : function(elem){

      var transition = elem.getStyles(["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"]);
      if(transition.transitionProperty.indexOf("none") == -1){

        elem.setProperty("__qxtransition", transition);
        elem.setStyle("transition", "none");
      };
    },
    /**
     * Restores an element's transition styles
     *
     * @param elem {qxWeb} Element
     */
    __activateTransition : function(elem){

      var transition = elem.getProperty("__qxtransition");
      var style = elem.getStyle("transitionProperty");
      if(transition && style.indexOf("none") != -1){

        elem.setStyles(transition);
        elem.setProperty("__qxtransition", "");
      };
    },
    dispose : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        qxWeb(window).off("resize", tabs._onResize, tabs);
        tabs.find("> ul > ." + this.getCssPrefix() + "-button").$offFirstCollection("tap", tabs._onTap, tabs);
        tabs.getChildren("ul").getFirst().$offFirstCollection("keydown", tabs._onKeyDown, tabs).setHtml("");
      });
      this.setHtml("").removeClasses([cssPrefix, "qx-flex-ready"]);
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      tabs : statics.tabs
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Compatibility class for {@link qxWeb}.
 */
qx.Bootstrap.define("q", {
  extend : qxWeb
});
// make sure it's the same
q = qxWeb;

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * Helper functions to handle an Object as a Hash map.
 *
 * @group (Utilities)
 */
qx.Bootstrap.define("qx.module.util.Object", {
  statics : {
    /**
     * Return a copy of an Object
     *
     * @signature function(source, deep)
     * @attachStatic {qxWeb, object.clone}
     *
     * @param source {Object} Object to copy
     * @param deep {Boolean} If the clone should be a deep clone.
     * @return {Object} A copy of the object
     */
    clone : qx.lang.Object.clone,
    /**
     * Get the values of a map as array
     *
     * @signature function(map)
     * @attachStatic {qxWeb, object.getValues}
     *
     * @param map {Object} the map
     * @return {Array} array of the values of the map
     */
    getValues : qx.lang.Object.getValues,
    /**
     * Inverts a map by exchanging the keys with the values.
     *
     * @signature function(map)
     * @attachStatic {qxWeb, object.invert}
     *
     * If the map has the same values for different keys, information will get lost.
     * The values will be converted to strings using the toString methods.
     *
     * @param map {Object} Map to invert
     * @return {Object} inverted Map
     */
    invert : qx.lang.Object.invert,
    /**
     * Whether the map contains the given value.
     *
     * @signature function(map, value)
     * @attachStatic {qxWeb, object.contains}
     *
     * @param map {Object} Map to search for the value
     * @param value {var} Value to look for
     * @return {Boolean} Whether the value was found in the map.
     */
    contains : qx.lang.Object.contains,
    /**
     * Merges one or more objects into the 'target' object.
     * *The objects are merged by overwriting existing keys.*
     *
     * @attachStatic {qxWeb, object.merge}
     *
     * @param target {Object} target object to merge into
     * @param varargs {var} As many items as you want to merge.
     * @return {Object} the merged object
     */
    merge : function(target, varargs){

      var varargs = qxWeb.array.fromArguments(arguments);
      var target = varargs.shift();
      varargs.forEach(function(sourceObject){

        target = qx.Bootstrap.objectMergeWith(target, sourceObject);
      });
      return target;
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "object" : {
        "clone" : statics.clone,
        "getValues" : statics.getValues,
        "invert" : statics.invert,
        "contains" : statics.contains,
        "merge" : statics.merge
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * The Accordion is a group of vertically stacked panels (here called pages),
 * each with a header.
 * By default, only one page is visible while the others are collapsed.
 * Clicking or tapping a collapsed page's header will expand it while collapsing the
 * previously expanded page.
 *
 * <h2>Markup</h2>
 * The Accordion contains an unordered list element (<code>ul</code>), which
 * will be created if not already present.
 * Headers and pages are list items (<code>li</code>). Each header must contain
 * a button with an <code>accordionPage</code> data attribute where the value is a
 * CSS selector string identifying the corresponding page. Headers and pages
 * will not be created automatically. They can be predefined in the DOM before
 * the <code>q().accordion()</code> factory method is called, or added programmatically.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-accordion</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Accordion widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-accordion-button</code></td>
 *       <td>Page header (<code>li</code>)</td>
 *       <td>Identifies and styles the page headers</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-accordion-button-active</code></td>
 *       <td>Page header (<code>li</code>)</td>
 *       <td>Identifies and styles the header of the currently expanded page. Applied in addition to <code>qx-accordion-button</code></td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-accordion-page</code></td>
 *       <td>Page (<code>li</code>)</td>
 *       <td>Identifies and styles the pages</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @require(qx.module.util.Object)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Accordion", {
  extend : qx.ui.website.Tabs,
  statics : {
    /**
     * Factory method which converts the current collection into a collection of
     * accordion widgets.
     *
     * @param preselected {Integer?} The (zero-based) index of the panel that
     * should initially be opened
     * @return {qx.ui.website.Accordion} A new Accordion collection.
     * @attach {qxWeb}
     */
    accordion : function(preselected){

      var accordion = new qx.ui.website.Accordion(this);
      accordion.setConfig("orientation", "vertical");
      if(preselected){

        accordion.setConfig("preselected", preselected);
      };
      accordion.init();
      return accordion;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  defer : function(statics){

    qxWeb.$attach({
      accordion : statics.accordion
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Utility for checking the type of a variable.
 * It adds a <code>type</code> key static to q and offers the given method.
 *
 * <pre class="javascript">
 * q.type.get("abc"); // return "String" e.g.
 * </pre>
 *
 * @group (Utilities)
 */
qx.Bootstrap.define("qx.module.util.Type", {
  statics : {
    /**
     * Get the internal class of the value. The following classes are possible:
     * <pre>
     * <code>"String"</code>,
     * <code>"Array"</code>,
     * <code>"Object"</code>,
     * <code>"RegExp"</code>,
     * <code>"Number"</code>,
     * <code>"Boolean"</code>,
     * <code>"Date"</code>,
     * <code>"Function"</code>,
     * <code>"Error"</code>
     * </pre>
     * @attachStatic {qxWeb, type.get}
     * @signature function(value)
     * @param value {var} Value to get the class for.
     * @return {String} The internal class of the value.
     */
    get : qx.Bootstrap.getClass
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      type : {
        get : statics.get
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This class is responsible for applying CSS3 transforms to the collection.
 * The implementation is mostly a cross browser wrapper for applying the
 * transforms.
 * The API is keep to the spec as close as possible.
 *
 * http://www.w3.org/TR/css3-3d-transforms/
 */
qx.Bootstrap.define("qx.module.Transform", {
  statics : {
    /**
     * Method to apply multiple transforms at once to the given element. It
     * takes a map containing the transforms you want to apply plus the values
     * e.g.<code>{scale: 2, rotate: "5deg"}</code>.
     * The values can be either singular, which means a single value will
     * be added to the CSS. If you give an array, the values will be split up
     * and each array entry will be used for the X, Y or Z dimension in that
     * order e.g. <code>{scale: [2, 0.5]}</code> will result in a element
     * double the size in X direction and half the size in Y direction.
     * Make sure your browser supports all transformations you apply.
     *
     * @attach {qxWeb}
     * @param transforms {Map} The map containing the transforms and value.
     * @return {qxWeb} This reference for chaining.
     */
    transform : function(transforms){

      this._forEachElement(function(el){

        qx.bom.element.Transform.transform(el, transforms);
      });
      return this;
    },
    /**
     * Translates by the given value. For further details, take
     * a look at the {@link #transform} method.
     *
     * @attach {qxWeb}
     * @param value {String|Array} The value to translate e.g. <code>"10px"</code>.
     * @return {qxWeb} This reference for chaining.
     */
    translate : function(value){

      return this.transform({
        translate : value
      });
    },
    /**
     * Scales by the given value. For further details, take
     * a look at the {@link #transform} method.
     *
     * @attach {qxWeb}
     * @param value {Number|Array} The value to scale.
     * @return {qxWeb} This reference for chaining.
     */
    scale : function(value){

      return this.transform({
        scale : value
      });
    },
    /**
     * Rotates by the given value. For further details, take
     * a look at the {@link #transform} method.
     *
     * @attach {qxWeb}
     * @param value {String|Array} The value to rotate e.g. <code>"90deg"</code>.
     * @return {qxWeb} This reference for chaining.
     */
    rotate : function(value){

      return this.transform({
        rotate : value
      });
    },
    /**
     * Skews by the given value. For further details, take
     * a look at the {@link #transform} method.
     *
     * @attach {qxWeb}
     * @param value {String|Array} The value to skew e.g. <code>"90deg"</code>.
     * @return {qxWeb} This reference for chaining.
     */
    skew : function(value){

      return this.transform({
        skew : value
      });
    },
    /**
     * Sets the transform-origin property.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-origin-property
     *
     * @attach {qxWeb}
     * @param value {String} CSS position values like <code>50% 50%</code> or
     *   <code>left top</code>.
     * @return {qxWeb} This reference for chaining.
     */
    setTransformOrigin : function(value){

      this._forEachElement(function(el){

        qx.bom.element.Transform.setOrigin(el, value);
      });
      return this;
    },
    /**
     * Returns the transform-origin property of the first element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-origin-property
     *
     * @attach {qxWeb}
     * @return {String} The set property, e.g. <code>50% 50%</code> or null,
     *   of the collection is empty.
     */
    getTransformOrigin : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Transform.getOrigin(this[0]);
      };
      return "";
    },
    /**
     * Sets the transform-style property.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-style-property
     *
     * @attach {qxWeb}
     * @param value {String} Either <code>flat</code> or <code>preserve-3d</code>.
     * @return {qxWeb} This reference for chaining.
     */
    setTransformStyle : function(value){

      this._forEachElement(function(el){

        qx.bom.element.Transform.setStyle(el, value);
      });
      return this;
    },
    /**
     * Returns the transform-style property of the first element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-style-property
     *
     * @attach {qxWeb}
     * @return {String} The set property, either <code>flat</code> or
     *   <code>preserve-3d</code>.
     */
    getTransformStyle : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Transform.getStyle(this[0]);
      };
      return "";
    },
    /**
     * Sets the perspective property.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-property
     *
     * @attach {qxWeb}
     * @param value {Number} The perspective layer. Numbers between 100
     *   and 5000 give the best results.
     * @return {qxWeb} This reference for chaining.
     */
    setTransformPerspective : function(value){

      this._forEachElement(function(el){

        qx.bom.element.Transform.setPerspective(el, value);
      });
      return this;
    },
    /**
     * Returns the perspective property of the first element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-property
     *
     * @attach {qxWeb}
     * @return {String} The set property, e.g. <code>500</code>
     */
    getTransformPerspective : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Transform.getPerspective(this[0]);
      };
      return "";
    },
    /**
     * Sets the perspective-origin property.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-origin-property
     *
     * @attach {qxWeb}
     * @param value {String} CSS position values like <code>50% 50%</code> or
     *   <code>left top</code>.
     * @return {qxWeb} This reference for chaining.
     */
    setTransformPerspectiveOrigin : function(value){

      this._forEachElement(function(el){

        qx.bom.element.Transform.setPerspectiveOrigin(el, value);
      });
      return this;
    },
    /**
     * Returns the perspective-origin property of the first element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-origin-property
     *
     * @attach {qxWeb}
     * @return {String} The set property, e.g. <code>50% 50%</code>
     */
    getTransformPerspectiveOrigin : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Transform.getPerspectiveOrigin(this[0]);
      };
      return "";
    },
    /**
     * Sets the backface-visibility property.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#backface-visibility-property
     *
     * @attach {qxWeb}
     * @param value {Boolean} <code>true</code> if the backface should be visible.
     * @return {qxWeb} This reference for chaining.
     */
    setTransformBackfaceVisibility : function(value){

      this._forEachElement(function(el){

        qx.bom.element.Transform.setBackfaceVisibility(el, value);
      });
      return this;
    },
    /**
     * Returns the backface-visibility property of the first element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#backface-visibility-property
     *
     * @attach {qxWeb}
     * @return {Boolean} <code>true</code>, if the backface is visible.
     */
    getTransformBackfaceVisibility : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Transform.getBackfaceVisibility(this[0]);
      };
      return "";
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "transform" : statics.transform,
      "translate" : statics.translate,
      "rotate" : statics.rotate,
      "skew" : statics.skew,
      "scale" : statics.scale,
      "setTransformStyle" : statics.setTransformStyle,
      "getTransformStyle" : statics.getTransformStyle,
      "setTransformOrigin" : statics.setTransformOrigin,
      "getTransformOrigin" : statics.getTransformOrigin,
      "setTransformPerspective" : statics.setTransformPerspective,
      "getTransformPerspective" : statics.getTransformPerspective,
      "setTransformPerspectiveOrigin" : statics.setTransformPerspectiveOrigin,
      "getTransformPerspectiveOrigin" : statics.getTransformPerspectiveOrigin,
      "setTransformBackfaceVisibility" : statics.setTransformBackfaceVisibility,
      "getTransformBackfaceVisibility" : statics.getTransformBackfaceVisibility
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Responsible for checking all relevant CSS transform properties.
 *
 * Specs:
 * http://www.w3.org/TR/css3-2d-transforms/
 * http://www.w3.org/TR/css3-3d-transforms/
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.CssTransform", {
  statics : {
    /**
     * Main check method which returns an object if CSS animations are
     * supported. This object contains all necessary keys to work with CSS
     * animations.
     * <ul>
     *  <li><code>name</code> The name of the css transform style</li>
     *  <li><code>style</code> The name of the css transform-style style</li>
     *  <li><code>origin</code> The name of the transform-origin style</li>
     *  <li><code>3d</code> Whether 3d transforms are supported</li>
     *  <li><code>perspective</code> The name of the perspective style</li>
     *  <li><code>perspective-origin</code> The name of the perspective-origin style</li>
     *  <li><code>backface-visibility</code> The name of the backface-visibility style</li>
     * </ul>
     *
     * @internal
     * @return {Object|null} The described object or null, if animations are
     *   not supported.
     */
    getSupport : function(){

      var name = qx.bom.client.CssTransform.getName();
      if(name != null){

        return {
          "name" : name,
          "style" : qx.bom.client.CssTransform.getStyle(),
          "origin" : qx.bom.client.CssTransform.getOrigin(),
          "3d" : qx.bom.client.CssTransform.get3D(),
          "perspective" : qx.bom.client.CssTransform.getPerspective(),
          "perspective-origin" : qx.bom.client.CssTransform.getPerspectiveOrigin(),
          "backface-visibility" : qx.bom.client.CssTransform.getBackFaceVisibility()
        };
      };
      return null;
    },
    /**
     * Checks for the style name used to set the transform origin.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getStyle : function(){

      return qx.bom.Style.getPropertyName("transformStyle");
    },
    /**
     * Checks for the style name used to set the transform origin.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getPerspective : function(){

      return qx.bom.Style.getPropertyName("perspective");
    },
    /**
     * Checks for the style name used to set the perspective origin.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getPerspectiveOrigin : function(){

      return qx.bom.Style.getPropertyName("perspectiveOrigin");
    },
    /**
     * Checks for the style name used to set the backface visibility.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getBackFaceVisibility : function(){

      return qx.bom.Style.getPropertyName("backfaceVisibility");
    },
    /**
     * Checks for the style name used to set the transform origin.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getOrigin : function(){

      return qx.bom.Style.getPropertyName("transformOrigin");
    },
    /**
     * Checks for the style name used for transforms.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getName : function(){

      return qx.bom.Style.getPropertyName("transform");
    },
    /**
     * Checks if 3D transforms are supported.
     * @internal
     * @return {Boolean} <code>true</code>, if 3D transformations are supported
     */
    get3D : function(){

      return qx.bom.client.CssTransform.getPerspective() != null;
    }
  },
  defer : function(statics){

    qx.core.Environment.add("css.transform", statics.getSupport);
    qx.core.Environment.add("css.transform.3d", statics.get3D);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This class is responsible for applying CSS3 transforms to plain DOM elements.
 * The implementation is mostly a cross browser wrapper for applying the
 * transforms.
 * The API is keep to the spec as close as possible.
 *
 * http://www.w3.org/TR/css3-3d-transforms/
 */
qx.Bootstrap.define("qx.bom.element.Transform", {
  statics : {
    /** Internal storage of the CSS names */
    __cssKeys : qx.core.Environment.get("css.transform"),
    /**
     * Method to apply multiple transforms at once to the given element. It
     * takes a map containing the transforms you want to apply plus the values
     * e.g.<code>{scale: 2, rotate: "5deg"}</code>.
     * The values can be either singular, which means a single value will
     * be added to the CSS. If you give an array, the values will be split up
     * and each array entry will be used for the X, Y or Z dimension in that
     * order e.g. <code>{scale: [2, 0.5]}</code> will result in a element
     * double the size in X direction and half the size in Y direction.
     * The values can be either singular, which means a single value will
     * be added to the CSS. If you give an array, the values will be join to
     * a string.
     * 3d suffixed properties will be taken for translate and scale if they are
     * available and an array with three values is given.
     * Make sure your browser supports all transformations you apply.
     *
     * @param el {Element} The element to apply the transformation.
     * @param transforms {Map} The map containing the transforms and value.
     */
    transform : function(el, transforms){

      var transformCss = this.getTransformValue(transforms);
      if(this.__cssKeys != null){

        var style = this.__cssKeys["name"];
        el.style[style] = transformCss;
      };
    },
    /**
     * Translates the given element by the given value. For further details, take
     * a look at the {@link #transform} method.
     * @param el {Element} The element to apply the transformation.
     * @param value {String|Array} The value to translate e.g. <code>"10px"</code>.
     */
    translate : function(el, value){

      this.transform(el, {
        translate : value
      });
    },
    /**
     * Scales the given element by the given value. For further details, take
     * a look at the {@link #transform} method.
     * @param el {Element} The element to apply the transformation.
     * @param value {Number|Array} The value to scale.
     */
    scale : function(el, value){

      this.transform(el, {
        scale : value
      });
    },
    /**
     * Rotates the given element by the given value. For further details, take
     * a look at the {@link #transform} method.
     * @param el {Element} The element to apply the transformation.
     * @param value {String|Array} The value to rotate e.g. <code>"90deg"</code>.
     */
    rotate : function(el, value){

      this.transform(el, {
        rotate : value
      });
    },
    /**
     * Skews the given element by the given value. For further details, take
     * a look at the {@link #transform} method.
     * @param el {Element} The element to apply the transformation.
     * @param value {String|Array} The value to skew e.g. <code>"90deg"</code>.
     */
    skew : function(el, value){

      this.transform(el, {
        skew : value
      });
    },
    /**
     * Converts the given map to a string which could be added to a css
     * stylesheet.
     * @param transforms {Map} The transforms map. For a detailed description,
     * take a look at the {@link #transform} method.
     * @return {String} The CSS value.
     */
    getCss : function(transforms){

      var transformCss = this.getTransformValue(transforms);
      if(this.__cssKeys != null){

        var style = this.__cssKeys["name"];
        return qx.bom.Style.getCssName(style) + ":" + transformCss + ";";
      };
      return "";
    },
    /**
     * Sets the transform-origin property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-origin-property
     * @param el {Element} The dom element to set the property.
     * @param value {String} CSS position values like <code>50% 50%</code> or
     *   <code>left top</code>.
     */
    setOrigin : function(el, value){

      if(this.__cssKeys != null){

        el.style[this.__cssKeys["origin"]] = value;
      };
    },
    /**
     * Returns the transform-origin property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-origin-property
     * @param el {Element} The dom element to read the property.
     * @return {String} The set property, e.g. <code>50% 50%</code>
     */
    getOrigin : function(el){

      if(this.__cssKeys != null){

        return el.style[this.__cssKeys["origin"]];
      };
      return "";
    },
    /**
     * Sets the transform-style property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-style-property
     * @param el {Element} The dom element to set the property.
     * @param value {String} Either <code>flat</code> or <code>preserve-3d</code>.
     */
    setStyle : function(el, value){

      if(this.__cssKeys != null){

        el.style[this.__cssKeys["style"]] = value;
      };
    },
    /**
     * Returns the transform-style property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#transform-style-property
     * @param el {Element} The dom element to read the property.
     * @return {String} The set property, either <code>flat</code> or
     *   <code>preserve-3d</code>.
     */
    getStyle : function(el){

      if(this.__cssKeys != null){

        return el.style[this.__cssKeys["style"]];
      };
      return "";
    },
    /**
     * Sets the perspective property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-property
     * @param el {Element} The dom element to set the property.
     * @param value {Number} The perspective layer. Numbers between 100
     *   and 5000 give the best results.
     */
    setPerspective : function(el, value){

      if(this.__cssKeys != null){

        el.style[this.__cssKeys["perspective"]] = value + "px";
      };
    },
    /**
     * Returns the perspective property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-property
     * @param el {Element} The dom element to read the property.
     * @return {String} The set property, e.g. <code>500</code>
     */
    getPerspective : function(el){

      if(this.__cssKeys != null){

        return el.style[this.__cssKeys["perspective"]];
      };
      return "";
    },
    /**
     * Sets the perspective-origin property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-origin-property
     * @param el {Element} The dom element to set the property.
     * @param value {String} CSS position values like <code>50% 50%</code> or
     *   <code>left top</code>.
     */
    setPerspectiveOrigin : function(el, value){

      if(this.__cssKeys != null){

        el.style[this.__cssKeys["perspective-origin"]] = value;
      };
    },
    /**
     * Returns the perspective-origin property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#perspective-origin-property
     * @param el {Element} The dom element to read the property.
     * @return {String} The set property, e.g. <code>50% 50%</code>
     */
    getPerspectiveOrigin : function(el){

      if(this.__cssKeys != null){

        var value = el.style[this.__cssKeys["perspective-origin"]];
        if(value != ""){

          return value;
        } else {

          var valueX = el.style[this.__cssKeys["perspective-origin"] + "X"];
          var valueY = el.style[this.__cssKeys["perspective-origin"] + "Y"];
          if(valueX != ""){

            return valueX + " " + valueY;
          };
        };
      };
      return "";
    },
    /**
     * Sets the backface-visibility property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#backface-visibility-property
     * @param el {Element} The dom element to set the property.
     * @param value {Boolean} <code>true</code> if the backface should be visible.
     */
    setBackfaceVisibility : function(el, value){

      if(this.__cssKeys != null){

        el.style[this.__cssKeys["backface-visibility"]] = value ? "visible" : "hidden";
      };
    },
    /**
     * Returns the backface-visibility property of the given element.
     *
     * Spec: http://www.w3.org/TR/css3-3d-transforms/#backface-visibility-property
     * @param el {Element} The dom element to read the property.
     * @return {Boolean} <code>true</code>, if the backface is visible.
     */
    getBackfaceVisibility : function(el){

      if(this.__cssKeys != null){

        return el.style[this.__cssKeys["backface-visibility"]] == "visible";
      };
      return true;
    },
    /**
     * Converts the given transforms map to a valid CSS string.
     *
     * @param transforms {Map} A map containing the transforms.
     * @return {String} The CSS transforms.
     */
    getTransformValue : function(transforms){

      var value = "";
      var properties3d = ["translate", "scale"];
      for(var property in transforms){

        var params = transforms[property];
        // if an array is given
        if(qx.Bootstrap.isArray(params)){

          // use 3d properties for translate and scale if all 3 parameter are given
          if(params.length === 3 && properties3d.indexOf(property) > -1 && qx.core.Environment.get("css.transform.3d")){

            value += this._compute3dProperty(property, params);
          } else {

            value += this._computeAxisProperties(property, params);
          };
        } else {

          // single value case
          value += property + "(" + params + ") ";
        };
      };
      return value.trim();
    },
    /**
     * Helper function to create 3d property.
     *
     * @param property {String} Property of transform, e.g. translate
     * @param params {Array} Array with three values, each one stands for an axis.
     *
     * @return {String} Computed property and its value
     */
    _compute3dProperty : function(property, params){

      var cssValue = "";
      property += "3d";
      for(var i = 0;i < params.length;i++){

        if(params[i] == null){

          params[i] = 0;
        };
      };
      cssValue += property + "(" + params.join(", ") + ") ";
      return cssValue;
    },
    /**
     * Helper function to create axis related properties.
     *
     * @param property {String} Property of transform, e.g. rotate
     * @param params {Array} Array with values, each one stands for an axis.
     *
     * @return {String} Computed property and its value
     */
    _computeAxisProperties : function(property, params){

      var value = "";
      var dimensions = ["X", "Y", "Z"];
      for(var i = 0;i < params.length;i++){

        if(params[i] == null || (i == 2 && !qx.core.Environment.get("css.transform.3d"))){

          continue;
        };
        value += property + dimensions[i] + "(";
        value += params[i];
        value += ") ";
      };
      return value;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2014 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Normalization for pointer events. Pointer events are hardware-agnostic and
 * will be fired regardless of which input type of input device is used (e.g. mouse or touchscreen).
 *
 * @require(qx.module.Event)
 * @require(qx.module.event.Pointer#getPointerType) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getViewportLeft) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getViewportTop) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getDocumentLeft) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getDocumentTop) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getScreenLeft) // static code analysis - this method has to referenced
 * @require(qx.module.event.Pointer#getScreenTop) // static code analysis - this method has to referenced
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.Pointer", {
  statics : {
    /**
     * List of event types to be normalized
     */
    TYPES : ["pointerdown", "pointerup", "pointermove", "pointercancel", "pointerover", "pointerout"],
    /**
     * Returns the device type which the event triggered. This can be one
     * of the following strings: <code>mouse</code>, <code>pen</code>
     * or <code>touch</code>.
     *
     * @return {String} The type of the pointer.
     */
    getPointerType : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the horizontal coordinate at which the event occurred relative
     * to the viewport.
     *
     * @return {Number} The horizontal mouse position
     */
    getViewportLeft : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the vertical coordinate at which the event occurred relative
     * to the viewport.
     *
     * @return {Number} The vertical mouse position
     * @signature function()
     */
    getViewportTop : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the horizontal position at which the event occurred relative to the
     * left of the document. This property takes into account any scrolling of
     * the page.
     *
     * @return {Number} The horizontal mouse position in the document.
     */
    getDocumentLeft : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the vertical position at which the event occurred relative to the
     * top of the document. This property takes into account any scrolling of
     * the page.
     *
     * @return {Number} The vertical mouse position in the document.
     */
    getDocumentTop : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the horizontal coordinate at which the event occurred relative to
     * the origin of the screen coordinate system.
     *
     * Note: This value is usually not very useful unless you want to
     * position a native popup window at this coordinate.
     *
     * @return {Number} The horizontal mouse position on the screen.
     */
    getScreenLeft : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Get the vertical coordinate at which the event occurred relative to
     * the origin of the screen coordinate system.
     *
     * Note: This value is usually not very useful unless you want to
     * position a native popup window at this coordinate.
     *
     * @return {Number} The vertical mouse position on the screen.
     */
    getScreenTop : function(){

      // stub for documentation. Implementation is in qx.event.type.dom.Pointer
      return false;
    },
    /**
     * Manipulates the native event object, adding methods if they're not
     * already present
     *
     * @param event {Event} Native event object
     * @param element {Element} DOM element the listener was attached to
     * @return {Event} Normalized event object
     * @internal
     */
    normalize : function(event, element){

      if(!event){

        return event;
      };
      qx.event.type.dom.Pointer.normalize(event);
      return event;
    }
  },
  defer : function(statics){

    qxWeb.$registerEventNormalization(qx.module.event.Pointer.TYPES, statics.normalize);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * The Slider control is used to select a numerical value from a given range.
 * It supports custom minimum/maximum values, step sizes and offsets (which limit
 * the knob's range).
 *
 * <h2>Markup</h2>
 * The Slider contains a single button element (the knob), which will be
 * created if it's not already present.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-slider</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Slider widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-slider-knob</code></td>
 *       <td>Slider knob (button)</td>
 *       <td>Identifies and styles the Slider's draggable knob</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @require(qx.module.event.Pointer)
 * @require(qx.module.Transform)
 * @require(qx.module.Template)
 * @require(qx.module.util.Type)
 *
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Slider", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * *step*
     *
     * The steps can be either a number or an array of predefined steps. In the
     * case of a number, it defines the amount of each step. In the case of an
     * array, the values of the array will be used as step values.
     *
     * Default value: <pre>1</pre>
     *
     *
     * *minimum*
     *
     * The minimum value of the slider. This will only be used if no explicit
     * steps are given.
     *
     * Default value: <pre>0 </pre>
     *
     *
     * *maximum*
     *
     * The maximum value of the slider. This will only be used if no explicit
     * steps are given.
     *
     * Default value: <pre>100</pre>
     *
     *
     * *offset*
     *
     * The amount of pixel the slider should be position away from its left and
     * right border.
     *
     * Default value: <pre>0 </pre>
     */
    _config : {
      minimum : 0,
      maximum : 100,
      offset : 0,
      step : 1
    },
    /**
     * *knobContent*
     *
     * The content of the knob element.
     *
     * Default value: <pre>{{value}}</pre>
     */
    _templates : {
      knobContent : "{{value}}"
    },
    /**
     * Factory method which converts the current collection into a collection of
     * slider widgets.
     *
     * @param value {Number?} The initial value of each slider widget
     * @param step {Number|Array?} The step config value to configure the step
     * width or the steps as array of numbers.
     * @return {qx.ui.website.Slider} A new Slider collection.
     * @attach {qxWeb}
     */
    slider : function(value, step){

      var slider = new qx.ui.website.Slider(this);
      slider.init();
      if(typeof step !== "undefined"){

        slider.setConfig("step", step);
      };
      if(typeof value !== "undefined"){

        slider.setValue(value);
      } else {

        slider.setValue(slider.getConfig("minimum"));
      };
      return slider;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  events : {
    /** Fired at each value change */
    "changeValue" : "Number",
    /** Fired with each pointer move event */
    "changePosition" : "Number"
  },
  members : {
    __dragMode : null,
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var cssPrefix = this.getCssPrefix();
      if(!this.getValue()){

        var step = this.getConfig("step");
        var defaultVal = qxWeb.type.get(step) == "Array" ? step[0] : this.getConfig("minimum");
        this.setProperty("value", defaultVal);
      };
      this._forEachElementWrapped(function(slider){

        slider.$onFirstCollection("pointerup", slider._onSliderPointerUp, slider).$onFirstCollection("focus", slider._onSliderFocus, slider).setStyle("touch-action", "pan-y");
        qxWeb(document).on("pointerup", slider._onDocPointerUp, slider);
        qxWeb(window).$onFirstCollection("resize", slider._onWindowResize, slider);
        if(slider.getChildren("." + cssPrefix + "-knob").length === 0){

          slider.append(qx.ui.website.Widget.create("<button>").addClass(cssPrefix + "-knob"));
        };
        slider.getChildren("." + cssPrefix + "-knob").setAttributes({
          "draggable" : "false",
          "unselectable" : "true"
        }).setHtml(slider._getKnobContent()).$onFirstCollection("pointerdown", slider._onPointerDown, slider).$onFirstCollection("dragstart", slider._onDragStart, slider).$onFirstCollection("focus", slider._onKnobFocus, slider).$onFirstCollection("blur", slider._onKnobBlur, slider);
        slider.render();
      });
      return true;
    },
    /**
     * Returns the current value of the slider
     *
     * @return {Integer} slider value
     */
    getValue : function(){

      return this.getProperty("value");
    },
    /**
     * Sets the current value of the slider.
     *
     * @param value {Integer} new value of the slider
     *
     * @return {qx.ui.website.Slider} The collection for chaining
     */
    setValue : function(value){

      if(qxWeb.type.get(value) != "Number"){

        throw Error("Please provide a Number value for 'value'!");
      };
      var step = this.getConfig("step");
      if(qxWeb.type.get(step) != "Array"){

        var min = this.getConfig("minimum");
        var max = this.getConfig("maximum");
        if(value < min){

          value = min;
        };
        if(value > max){

          value = max;
        };
        if(qxWeb.type.get(step) == "Number"){

          value = Math.round(value / step) * step;
        };
      };
      this.setProperty("value", value);
      if(qxWeb.type.get(step) != "Array" || step.indexOf(value) != -1){

        this.__valueToPosition(value);
        this.getChildren("." + this.getCssPrefix() + "-knob").setHtml(this._getKnobContent());
        this.emit("changeValue", value);
      };
      return this;
    },
    render : function(){

      var step = this.getConfig("step");
      if(qxWeb.type.get(step) == "Array"){

        this._getPixels();
        if(step.indexOf(this.getValue()) == -1){

          this.setValue(step[0]);
        } else {

          this.setValue(this.getValue());
        };
      } else if(qxWeb.type.get(step) == "Number"){

        this.setValue(Math.round(this.getValue() / step) * step);
      } else {

        this.setValue(this.getValue());
      };
      this.getChildren("." + this.getCssPrefix() + "-knob").setHtml(this._getKnobContent());
      return this;
    },
    /**
     * Returns the content that should be displayed in the knob
     * @return {String} knob content
     */
    _getKnobContent : function(){

      return qxWeb.template.render(this.getTemplate("knobContent"), {
        value : this.getValue()
      });
    },
    /**
     * Returns half of the slider knob's width, used for positioning
     * @return {Integer} half knob width
     */
    _getHalfKnobWidth : function(){

      var knobWidth = this.getChildren("." + this.getCssPrefix() + "-knob").getWidth();
      return Math.round(parseFloat(knobWidth / 2));
    },
    /**
     * Returns the boundaries (in pixels) of the slider's range of motion
     * @return {Map} a map with the keys <code>min</code> and <code>max</code>
     */
    _getDragBoundaries : function(){

      var paddingLeft = Math.ceil(parseFloat(this.getStyle("paddingLeft")) || 0);
      var paddingRight = Math.ceil(parseFloat(this.getStyle("paddingRight")) || 0);
      var offset = this.getConfig("offset");
      return {
        min : this.getOffset().left + offset + paddingLeft,
        max : this.getOffset().left + this.getWidth() - offset - paddingRight
      };
    },
    /**
     * Creates a lookup table to get the pixel values for each slider step
     * and computes the "breakpoint" between two steps in pixel.
     *
     * @return {Integer[]} list of pixel values
     */
    _getPixels : function(){

      var step = this.getConfig("step");
      if(qxWeb.type.get(step) != "Array"){

        return [];
      };
      var dragBoundaries = this._getDragBoundaries();
      var pixel = [];
      // First pixel value is fixed
      pixel.push(dragBoundaries.min);
      var lastIndex = step.length - 1;
      var paddingLeft = Math.ceil(parseFloat(this.getStyle("paddingLeft")) || 0);
      var paddingRight = Math.ceil(parseFloat(this.getStyle("paddingRight")) || 0);
      //The width really used by the slider (drag area)
      var usedWidth = this.getWidth() - (this.getConfig("offset") * 2) - paddingLeft - paddingRight;
      //The width of a single slider step
      var stepWidth = usedWidth / (step[lastIndex] - step[0]);
      var stepCount = 0;
      for(var i = 1,j = step.length - 1;i < j;i++){

        stepCount = step[i] - step[0];
        pixel.push(Math.round(stepCount * stepWidth) + dragBoundaries.min);
      };
      // Last pixel value is fixed
      pixel.push(dragBoundaries.max);
      return pixel;
    },
    /**
    * Returns the nearest existing slider value according to he position of the knob element.
    * @param position {Integer} The current knob position in pixels
    * @return {Integer} The next position to snap to
    */
    _getNearestValue : function(position){

      var pixels = this._getPixels();
      if(pixels.length === 0){

        var dragBoundaries = this._getDragBoundaries();
        var availableWidth = dragBoundaries.max - dragBoundaries.min;
        var relativePosition = position - dragBoundaries.min;
        var fraction = relativePosition / availableWidth;
        var min = this.getConfig("minimum");
        var max = this.getConfig("maximum");
        var result = (max - min) * fraction + min;
        if(result < min){

          result = min;
        };
        if(result > max){

          result = max;
        };
        var step = this.getConfig("step");
        if(qxWeb.type.get(step) == "Number"){

          result = Math.round(result / step) * step;
        };
        return result;
      };
      var currentIndex = 0,before = 0,after = 0;
      for(var i = 0,j = pixels.length;i < j;i++){

        if(position >= pixels[i]){

          currentIndex = i;
          before = pixels[i];
          after = pixels[i + 1] || before;
        } else {

          break;
        };
      };
      currentIndex = Math.abs(position - before) <= Math.abs(position - after) ? currentIndex : currentIndex + 1;
      return this.getConfig("step")[currentIndex];
    },
    /**
     * Reads the pointer's position and sets slider value to the nearest step.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onSliderPointerUp : function(e){

      if((e.getDocumentLeft() === 0 && e.getDocumentTop() === 0) || !this.getEnabled()){

        return;
      };
      this.setValue(this._getNearestValue(e.getDocumentLeft()));
    },
    /**
     * Listener for the pointerdown event. Initializes drag or tracking mode.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onPointerDown : function(e){

      // this can happen if the user releases the button while dragging outside
      // of the browser viewport
      if(this.__dragMode){

        return;
      };
      this.__dragMode = true;
      qxWeb(document.documentElement).on("pointermove", this._onPointerMove, this).setStyle("cursor", "pointer");
      e.stopPropagation();
    },
    /**
     * Listener for the pointerup event. Used for cleanup of previously
     * initialized modes.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onDocPointerUp : function(e){

      if(this.__dragMode === true){

        // Cleanup status flags
        delete this.__dragMode;
        this.__valueToPosition(this.getValue());
        qxWeb(document.documentElement).off("pointermove", this._onPointerMove, this).setStyle("cursor", "auto");
        e.stopPropagation();
      };
    },
    /**
     * Listener for the pointermove event for the knob. Only used in drag mode.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onPointerMove : function(e){

      e.preventDefault();
      if(this.__dragMode){

        var dragPosition = e.getDocumentLeft();
        var dragBoundaries = this._getDragBoundaries();
        var paddingLeft = Math.ceil(parseFloat(this.getStyle("paddingLeft")) || 0);
        var positionKnob = dragPosition - this.getOffset().left - this._getHalfKnobWidth() - paddingLeft;
        if(dragPosition >= dragBoundaries.min && dragPosition <= dragBoundaries.max){

          this.setValue(this._getNearestValue(dragPosition));
          if(positionKnob > 0){

            this._setKnobPosition(positionKnob);
            this.emit("changePosition", positionKnob);
          };
        };
        e.stopPropagation();
      };
    },
    /**
     * Prevents drag event propagation
     * @param e {Event} e drag start event
     */
    _onDragStart : function(e){

      e.stopPropagation();
      e.preventDefault();
    },
    /**
     * Delegates the Slider's focus to the knob
     * @param e {Event} focus event
     */
    _onSliderFocus : function(e){

      this.getChildren("." + this.getCssPrefix() + "-knob").focus();
    },
    /**
     * Attaches the event listener for keyboard support to the knob on focus
     * @param e {Event} focus event
     */
    _onKnobFocus : function(e){

      this.getChildren("." + this.getCssPrefix() + "-knob").$onFirstCollection("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the event listener for keyboard support from the knob on blur
     * @param e {Event} blur event
     */
    _onKnobBlur : function(e){

      this.getChildren("." + this.getCssPrefix() + "-knob").$offFirstCollection("keydown", this._onKeyDown, this);
    },
    /**
     * Moves the knob if the left or right arrow key is pressed
     * @param e {Event} keydown event
     */
    _onKeyDown : function(e){

      var newValue;
      var currentValue = this.getValue();
      var step = this.getConfig("step");
      var stepType = qxWeb.type.get(step);
      var key = e.getKeyIdentifier();
      var idx;
      if(key == "Right"){

        if(stepType === "Array"){

          idx = step.indexOf(currentValue);
          if(idx !== undefined){

            newValue = step[idx + 1] || currentValue;
          };
        } else if(stepType === "Number"){

          newValue = currentValue + step;
        } else {

          newValue = currentValue + 1;
        };
      } else if(key == "Left"){

        if(stepType === "Array"){

          idx = step.indexOf(currentValue);
          if(idx !== undefined){

            newValue = step[idx - 1] || currentValue;
          };
        } else if(stepType === "Number"){

          newValue = currentValue - step;
        } else {

          newValue = currentValue - 1;
        };
      } else {

        return;
      };
      this.setValue(newValue);
    },
    /**
    * Applies the horizontal position
    * @param x {Integer} the position to move to
    */
    _setKnobPosition : function(x){

      var knob = this.getChildren("." + this.getCssPrefix() + "-knob");
      if(qxWeb.env.get("css.transform")){

        knob.translate([x + "px", 0, 0]);
      } else {

        knob.setStyle("left", x + "px");
      };
    },
    /**
     * Listener for window resize events. This listener method resets the
     * calculated values which are used to position the slider knob.
     */
    _onWindowResize : function(){

      var value = this.getProperty("value");
      if(qxWeb.type.get(this.getConfig("step")) == "Array"){

        this._getPixels();
      };
      this.__valueToPosition(value);
    },
    /**
     * Positions the slider knob to the given value and fires the "changePosition"
     * event with the current position as integer.
     *
     * @param value {Integer} slider step value
     */
    __valueToPosition : function(value){

      var pixels = this._getPixels();
      var paddingLeft = Math.ceil(parseFloat(this.getStyle("paddingLeft")) || 0);
      var valueToPixel;
      if(pixels.length > 0){

        // Get the pixel value of the current step value
        valueToPixel = pixels[this.getConfig("step").indexOf(value)] - paddingLeft;
      } else {

        var dragBoundaries = this._getDragBoundaries();
        var availableWidth = dragBoundaries.max - dragBoundaries.min;
        var range = this.getConfig("maximum") - this.getConfig("minimum");
        var fraction = (value - this.getConfig("minimum")) / range;
        valueToPixel = (availableWidth * fraction) + dragBoundaries.min - paddingLeft;
      };
      // relative position is necessary here
      var position = valueToPixel - this.getOffset().left - this._getHalfKnobWidth();
      this._setKnobPosition(position);
      this.emit("changePosition", position);
    },
    dispose : function(){

      this._forEachElementWrapped(function(slider){

        qxWeb(document).off("pointerup", slider._onDocPointerUp, slider);
        qxWeb(window).$offFirstCollection("resize", slider._onWindowResize, slider);
        slider.$offFirstCollection("pointerup", slider._onSliderPointerUp, slider).$offFirstCollection("focus", slider._onSliderFocus, slider);
        slider.getChildren("." + this.getCssPrefix() + "-knob").$offFirstCollection("pointerdown", slider._onPointerDown, slider).$offFirstCollection("dragstart", slider._onDragStart, slider).$offFirstCollection("focus", slider._onKnobFocus, slider).$offFirstCollection("blur", slider._onKnobBlur, slider).$offFirstCollection("keydown", slider._onKeyDown, slider);
      });
      this.setHtml("");
      return this.base(arguments);
    }
  },
  // Make the slider widget available as a qxWeb module
  defer : function(statics){

    qxWeb.$attach({
      slider : statics.slider
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * This is a simple button widget which takes care of setting the label
 * and icon of a button.
 *
 * <h2>Markup</h2>
 * The Button can contain a <code>span</code> element for the label and/or
 * an <code>img</code> element for the icon.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-button</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Button widget</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Button", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * Factory method for the button widget which converts a standard
     * collection into a collection of buttons.
     *
     * @param label {String?} The label of the button.
     * @param icon {String?} The url for the button icon.
     * @return {qx.ui.website.Button} A collection of buttons.
     *
     * @attach {qxWeb}
     */
    button : function(label, icon){

      var buttons = new qx.ui.website.Button(this);
      buttons.init();
      if(label != null){

        buttons.setLabel(label);
      };
      if(icon != null){

        buttons.setIcon(icon);
      };
      return buttons;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      this._forEachElementWrapped(function(button){

        if(button.getChildren("span") == 0){

          qxWeb.create("<span>").appendTo(button);
        };
        if(button.getChildren("img") == 0){

          qxWeb.create("<img>").appendTo(button).setStyle("display", "none");
        };
      });
      return true;
    },
    /**
     * Sets the button's label text
     *
     * @param value {String} label text
     * @return {qxWeb} The collection for chaining
     */
    setLabel : function(value){

      this.getChildren("span").setHtml(value);
      return this;
    },
    /**
     * Returns the button's label text
     *
     * @return {String} label text
     */
    getLabel : function(){

      return this.getChildren("span").getHtml();
    },
    /**
     * Sets the source of the button's icon
     *
     * @param src {String} source URI for the icon
     * @return {qxWeb} The collection for chaining
     */
    setIcon : function(src){

      var img = this.getChildren("img");
      img.setAttribute("src", src);
      img.setStyle("display", src ? "inline" : "none");
      return this;
    },
    /**
     * Returns the URI of the button's icon
     *
     * @return {String|null} Icon image URI
     */
    getIcon : function(){

      return this.getChildren("img").getAttribute("src");
    },
    /**
     * Sets the menu to be shown when the button is clicked or tapped
     *
     * @param menu {qxWeb} menu element wrapped in a collection
     * @return {qxWeb} The collection for chaining
     */
    setMenu : function(menu){

      this.on("tap", function(e){

        if(menu.getStyle("display") === "none"){

          menu.placeTo(this, "bottom-left");
          menu.show();
          qxWeb(document).once("tap", function(){

            menu.hide();
          });
        } else {

          menu.hide();
        };
        e.stopPropagation();
      });
      return this;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      button : statics.button
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Romeo Kenfack Tsakem (rkenfack)

************************************************************************ */
/**
 * This is a widget that enhances an HTML table with some basic features like
 * Sorting and Filtering.
 *
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-table</code></td>
 *       <td>Table element</td>
 *       <td>Identifies the Table widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-cell</code></td>
 *       <td>Table cell (<code>td</code>)</td>
 *       <td>Identifies and styles a cell of the widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-header</code></td>
 *       <td>Table header (<code>th</code>)</td>
 *       <td>Identifies and styles a header of the table widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-row-selection</code></td>
 *       <td>Table cell (<code>td</code>)</td>
 *       <td>Identifies and styles the cells containing the inputs for the row selection</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-selection-input</code></td>
 *       <td><code>input</code></td>
 *       <td>Identifies and styles input element to select a table row</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-input-label</code></td>
 *       <td>Label element (<code>label</code>)</td>
 *       <td>Identifies and styles label contained in the selection cell. This label can be used to create custom inputs</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-row-selected</code></td>
 *       <td>Selected row (<code>tr</code>)</td>
 *       <td>Identifies and styles the selected table rows</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-sort-asc</code></td>
 *       <td>Table header (<code>th</code>)</td>
 *       <td>Identifies and styles the header of the current ascendant sorted column</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-table-sort-desc</code></td>
 *       <td>Table header (<code>th</code>)</td>
 *       <td>Identifies and styles the header of the current descendant sorted column</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * @group (Widget)
 *
 */
qx.Bootstrap.define("qx.ui.website.Table", {
  extend : qx.ui.website.Widget,
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  events : {
    /** Fires at each model change */
    "modelChange" : "Array",
    /** Fires at each selection change */
    "selectionChange" : "qxWeb",
    /** Fires each time a cell of the widget is clicked */
    "cellClick" : "Object",
    /** Fires each time a cell of the widget is hovered */
    "cellHover" : "Object",
    /** Fires each time the mouse leave a cell of the table widget */
    "cellOut" : "Object",
    /** Fires after the model has been applied to the widget */
    "modelApplied" : "Array",
    /** Fires each time the value of a cell is rendered into the cell */
    "cellRender" : "Object",
    /** Fires after the table rows have been sorted */
    "sort" : "Object",
    /** Fires after the table rows have been filtered */
    "filter" : "Object"
  },
  statics : {
    /**
    * *caseSensitive*
    * Determines if the string sorting/filtering should be case sensitive or not. Default value : <code>false</code>.
    *
    * *rowSelection*
    * Defines the row selection type. Possible values are : 'none', 'single', 'multiple'. Default value : <code>none</code>.
    *
    */
    _config : {
      caseSensitive : false,
      rowSelection : "none",
      sortable : false
    },
    /**
    * *columnDefault*
    * The Default cell template for all the table columns. Default value :
    *
    * <pre>
    *   <td class='qx-table-cell' data-qx-table-cell-key='{{ cellKey }}'>
    *     <div class='qx-table-cell-wrapper'>
    *       <label>{{& value }}</label>
    *     </div>
    *   <td>"
    * </pre>
    *
    * To define a custom template for a specific name use <code>setTemplate('colname', template)</code> or use <br>
    * <code>setTemplate('columnDefault', template)</code> to set one template for all your table columns.
    *
    */
    _templates : {
      "columnDefault" : "<td class='qx-table-cell' data-qx-table-cell-key='{{ cellKey }}'>" + "<div class='qx-table-cell-wrapper'>" + "<label>{{& value }}</label>" + "</div>" + "<td>"
    },
    /**
     * Factory method which converts the current collection into a collection of
     * table widgets.
     * @param model {Array} The model of the widgets in the collection
     * @return {qx.ui.website.Table} A new table collection.
     * @attach {qxWeb}
     */
    table : function(model){

      var table = new qx.ui.website.Table(this);
      table.setProperty("__model", model);
      table.init();
      return table;
    },
    /**
     * Checks if a given string is a number
     * @param n {String} The String to check the type for
     * @return {Boolean} The result of the check
     */
    __isNumber : function(n){

      return (Object.prototype.toString.call(n) === '[object Number]' || Object.prototype.toString.call(n) === '[object String]') && !isNaN(parseFloat(n)) && isFinite(n.toString().replace(/^-/, ''));
    },
    /**
     * Checks if a given string is a Date
     * @param val {String} The String to check the type for
     * @return {Boolean} The result of the check
     */
    __isDate : function(val){

      var d = new Date(val);
      return !isNaN(d.valueOf());
    },
    /**
     * Gets the index of an HTMLElement inside of an HTMLCollection
     * @param htmlCollection {HTMLCollection} The HTMLCollection
     * @param htmlElement {HTMLElement} The HTMLElement
     * @return {Integer} The position of the htmlElement or -1
     */
    __getIndex : function(htmlCollection, htmlElement){

      var index = -1;
      for(var i = 0,l = htmlCollection.length;i < l;i++){

        if(htmlCollection.item(i) == htmlElement){

          index = i;
          break;
        };
      };
      return index;
    },
    /**
    * Generates an unique id
    * @return {String} The generated id
    */
    __getUID : function(){

      return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 18);
    },
    /** */
    __selectionTypes : ["single", "multiple", "none"],
    /** */
    __internalCellClass : "qx-table-cell",
    /** */
    __internalHeaderClass : "qx-table-header",
    /** */
    __internalSelectionClass : "qx-table-row-selection",
    /** */
    __internalInputClass : "qx-table-selection-input",
    /** */
    __allColumnSelector : "qx-table-all-columns",
    /** */
    __dataColName : "data-qx-table-col-name",
    /** */
    __dataColType : "data-qx-table-col-type",
    /** */
    __dataSortingKey : "data-qx-table-cell-key",
    /** */
    __modelSortingKey : "cellKey",
    /** */
    __inputLabelClass : "qx-table-input-label",
    /** */
    __selectedRowClass : "qx-table-row-selected",
    /** */
    __ascSortingClass : "qx-table-sort-asc",
    /** */
    __descSortingClass : "qqx-table-sort-desc"
  },
  members : {
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var model = this.getProperty("__model");
      this._forEachElementWrapped(function(table){

        if(qxWeb.getNodeName(table).toUpperCase() !== "TABLE"){

          throw new Error("collection should contains only table elements !!");
        };
        if(!table[0].tHead){

          throw new Error("A Table header element is required for this widget.");
        };
        table.find("tbody td").addClass("qx-table-cell");
        table.setProperty("__inputName", "input" + qx.ui.website.Table.__getUID());
        table.__getColumnMetaData(model);
        table.setModel(model);
        table.setSortingFunction(table.__defaultColumnSort);
        table.__registerEvents();
        this.setProperty("__hovered", null);
      }.bind(this));
      return true;
    },
    /**
     * Sets the given model to the widgets in the collection
     *
     * @param model {Array} The model to be set
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setModel : function(model){

      this._forEachElementWrapped(function(table){

        if(typeof model != "undefined"){

          if(qx.lang.Type.isArray(model)){

            table.setProperty("__model", model);
            table.emit("modelChange", model);
          } else {

            throw new Error("model must be an Array !!");
          };
        };
      });
      return this;
    },
    /**
     * Set the column types for the table widgets in the collection
     * @param columnName {String} The column name
     * @param type {String} The type of the column
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setColumnType : function(columnName, type){

      this._forEachElementWrapped(function(table){

        table.__checkColumnExistance(columnName);
        table.getProperty("__columnMeta")[columnName].type = type;
      }.bind(this));
      return this;
    },
    /**
     * Returns the type of the specified column
     * @param columnName {String} The column name
     * @return {String} The type of the specified column
     */
    getColumnType : function(columnName){

      this.eq(0).__checkColumnExistance(columnName);
      return this.eq(0).getProperty("__columnMeta")[columnName].type;
    },
    /**
     * Returns the cell at the given position for the first widget in the collection
     * @param row {Integer} The row number
     * @param col {Integer} The column number
     * @return {qxWeb} The cell found at the given position
     */
    getCell : function(row, col){

      return qxWeb(this.eq(0).__getRoot().rows.item(row).cells.item(col));
    },
    /**
    * Returns a collection containing the rows of the first table in the collection.
    * @return {qxWeb} The collection containing the table rows
    */
    getRows : function(){

      return qxWeb(this.eq(0).__getRoot().rows);
    },
    /**
     * Defines the comparison function to use to sort columns of the given type
     * @param type {String} The type to define the function for
     * @param compareFunc {Function} The comparison function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setCompareFunction : function(type, compareFunc){

      type = qxWeb.string.firstUp(type);
      this._forEachElementWrapped(function(table){

        table.setProperty("_compare" + type, compareFunc);
      }.bind(this));
      return this;
    },
    /**
     * Unset the compare function for the given type
     *
     * @param type {String} The type to unset the function for
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    unsetCompareFunction : function(type){

      type = qxWeb.string.firstUp(type);
      var compareFunc = this["_compare" + type] || this._compareString;
      this._forEachElementWrapped(function(table){

        table.setProperty("_compare" + type, compareFunc);
      }.bind(this));
      return this;
    },
    /**
     * Returns the comparison function for the given type
     * @param type {String} The type to get the comparison function for
     * @return {Function} The comparison function
     */
    getCompareFunction : function(type){

      type = qxWeb.string.firstUp(type);
      return this.eq(0).getProperty("_compare" + type) || this["_compare" + type];
    },
    /**
     * Set the function that control the sorting process
     * @param func {Function} The sorting function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setSortingFunction : function(func){

      func = func || function(){
      };
      this._forEachElementWrapped(function(table){

        table.setProperty("__sortingFunction", func);
      }.bind(this));
      return this;
    },
    /**
     * Unset the function that control the sorting process
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    unsetSortingFunction : function(){

      this._forEachElementWrapped(function(table){

        table.setProperty("__sortingFunction", this.__defaultColumnSort);
      }.bind(this));
      return this;
    },
    /**
     * Set the function that will be used to process the column filtering
     * @param func {Function} The filter function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setFilterFunction : function(func){

      this._forEachElementWrapped(function(table){

        table.setProperty("__filterFunction", func);
      }.bind(this));
      return this;
    },
    /**
     * Unset the filter function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    unsetFilterFunction : function(){

      this._forEachElementWrapped(function(table){

        table.setProperty("__filterFunction", this.__defaultColumnFilter);
      }.bind(this));
      return this;
    },
    /**
    * Set the filter function to use to filter a specific column
    * @param columnName {String} The name of the column
    * @param func {Function} The filter
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    *
    */
    setColumnFilter : function(columnName, func){

      this._forEachElementWrapped(function(table){

        table.__checkColumnExistance(columnName);
        if(!table.getProperty("__filterFunc")){

          table.setProperty("__filterFunc", {
          });
        };
        table.getProperty("__filterFunc")[columnName] = func;
      }.bind(this));
      return this;
    },
    /**
    * Returns the filter function set on a specific column
    *
    * @param columnName {String} The name of the column
    * @return {Function} The filter function
    *
    */
    getColumnFilter : function(columnName){

      if(this.eq(0).getProperty("__filterFunc")){

        return this.eq(0).getProperty("__filterFunc")[columnName];
      };
      return null;
    },
    /**
    * Set the filter function to use to filter the table rows
    * @param func {Function} The filter
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    setRowFilter : function(func){

      this._forEachElementWrapped(function(table){

        if(!table.getProperty("__filterFunc")){

          table.setProperty("__filterFunc", {
          });
        };
        table.getProperty("__filterFunc").row = func;
      }.bind(this));
      return this;
    },
    /**
    * Returns the filter function set on a specific column
    * @return {Function} The filter function
    *
    */
    getRowFilter : function(){

      if(this.eq(0).getProperty("__filterFunc")){

        return this.eq(0).getProperty("__filterFunc").row;
      };
      return null;
    },
    /**
     * Sort the column with the given name according to the specified direction
     * @param columnName {String} The name of the column to sort
     * @param dir {String} The sorting direction (asc or desc)
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    sort : function(columnName, dir){

      this.__checkColumnExistance(columnName);
      this._forEachElementWrapped(function(table){

        table.setSortingClass(columnName, dir);
        table.__sortDOM(table.__sort(columnName, dir));
      }.bind(this));
      this.emit("sort", {
        columName : columnName,
        direction : dir
      });
      return this;
    },
    /**
    * Filters rows or columns according to the given parameters
    * @param keyword {String} The keyword to use to filter
    * @param columnName {String ?} The column name
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    filter : function(keyword, columnName){

      if(columnName){

        this.__checkColumnExistance(columnName);
        if(keyword == ""){

          this.resetFilter(columnName);
        };
      } else {

        columnName = qx.ui.website.Table.__allColumnSelector;
      };
      this._forEachElementWrapped(function(table){

        if(!table.getProperty("__filters")){

          table.setProperty("__filters", {
          });
        };
        if(table.getProperty("__filters")[columnName]){

          table.getProperty("__filters")[columnName].keyword = keyword;
          table.__getRoot().appendChild(table.getProperty("__filters")[columnName].rows);
        } else {

          table.getProperty("__filters")[columnName] = {
            keyword : keyword,
            rows : document.createDocumentFragment()
          };
        };
        table.__filterDom(keyword, columnName);
      }.bind(this));
      this.emit("filter", {
        columName : columnName,
        keyword : keyword
      });
      return this;
    },
    /**
    * Resets the filter apllied on a specific column
    * @param columnName {String ?} The column name
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    resetFilter : function(columnName){

      var filters = null;
      this._forEachElementWrapped(function(table){

        filters = table.getProperty("__filters");
        if(filters){

          if(columnName){

            table.__getRoot().appendChild(filters[columnName].rows);
          } else {

            for(var col in filters){

              table.__getRoot().appendChild(filters[col].rows);
            };
          };
        };
      });
      return this;
    },
    /**
    * Removes the rows of in the table body
    * @param tableData {String|qxWeb} Html string or collection containing the rows to be added
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    setContent : function(tableData){

      var rows = this.__extractTableRows(tableData);
      var tbody = this.find('tbody');
      tbody.empty();
      rows.appendTo(tbody);
      this.render();
      return this;
    },
    /**
    * Appends new rows to the table
    * @param tableData {String|qxWeb} Html string or collection containing the rows to be appended
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    appendContent : function(tableData){

      var rows = this.__extractTableRows(tableData);
      var tbody = this.find('tbody');
      rows.appendTo(tbody);
      this.render();
      return this;
    },
    /**
    * Extracts table rows from a given HTML String or qxWeb collection
    * @param data {qxWeb|String} Data containing the rows to be extracted
    * @return {qxWeb} Collection containing extracted rows
    */
    __extractTableRows : function(data){

      var rows = qxWeb();
      if(typeof data == "string"){

        var markup = data;
        data = qxWeb.create(data);
        if(qxWeb.getNodeName(data) != "table"){

          data = qxWeb.create("<table>" + markup + "</table>");
        };
        rows = data.find("tbody tr");
      } else if(qxWeb.isNode(data) || (data instanceof qxWeb)){

        data = qxWeb(data);
        var nodeName = qxWeb.getNodeName(data);
        switch(nodeName){case "table":
        rows = qxWeb(data).find("tbody tr");
        break;case "tr":
        rows = data;
        break;case "tbody":
        rows = qxWeb(data).find("tr");
        break;};
      };
      return rows;
    },
    /**
    * Filters the rendered table cells
    * @param keyword {String} The keyword to use to filter
    * @param columnName {String ?} The column name
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    __filterDom : function(keyword, columnName){

      var colIndex = this.__getColumnIndex(columnName);
      var filterFunc = columnName == qx.ui.website.Table.__allColumnSelector ? this.getRowFilter() : this.getColumnFilter(columnName);
      filterFunc = filterFunc || this.__defaultColumnFilter;
      var rows = this.__getDataRows(),data = {
      };
      for(var i = 0;i < rows.length;i++){

        data = {
          columnName : columnName,
          columnIndex : colIndex,
          cell : colIndex ? qxWeb(rows[i].cells.item(colIndex)) : null,
          row : qxWeb(rows[i]),
          keyword : keyword
        };
        if(!filterFunc.bind(this)(data)){

          this.getProperty("__filters")[columnName].rows.appendChild(rows[i]);
        };
      };
      return this;
    },
    /**
     * Get the current column sorting information for the first widget in the collection
     * @return {Map} The map containing the current sorting information
     */
    getSortingData : function(){

      return this.eq(0).getProperty("__sortingData");
    },
    //overriden
    render : function(){

      this._forEachElementWrapped(function(table){

        var sortingData = table.getSortingData();
        var rowSelection = table.getConfig("rowSelection");
        table.__applyTemplate(table.getProperty("__model"));
        if(qx.ui.website.Table.__selectionTypes.indexOf(rowSelection) != -1){

          table.__processSelectionInputs(rowSelection);
        };
        if(sortingData){

          table.__sortDOM(table.__sort(sortingData.columnName, sortingData.direction));
        };
      });
      return this;
    },
    //Private API
    /**
    * Renders or removes the selection inputs according to the specified widget selection mode
    * @param rowSelection {String} The selection mode
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    __processSelectionInputs : function(rowSelection){

      switch(rowSelection){case "none":
      qxWeb("." + qx.ui.website.Table.__internalSelectionClass).remove();
      break;case "multiple":case "single":
      this.__createInputs("checkbox");
      break;case "single":
      this.__createInputs("radio");
      break;};
      return this;
    },
    /**
     * Creates input nodes for the row selection
     * @param type {String} The type of the inputs to creates
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __createInputs : function(type){

      this.__createInput(this.__getHeaderRow(), type);
      var rows = this.find("tbody")[0].getElementsByTagName("tr");
      for(var i = 0;i < rows.length;i++){

        this.__createInput(rows.item(i), type);
      };
      return this;
    },
    /**
    * Creates an input an input node for a specific row
    * @param row {HTMLTableRowElement} The row to create the input for
    * @param type {String} The type of the input tom create (radio or checkbox)
    * @param nodeName {String} The nodename of the table cell that will contain the input
    */
    __createInput : function(row, type, nodeName){

      var cssPrefix = this.getCssPrefix();
      var clazz = qx.ui.website.Table;
      var headerInput = qxWeb("." + clazz.__internalHeaderClass + " input");
      var selectionMode = this.getConfig("rowSelection");
      var checked = "";
      if(headerInput.length > 0){

        checked = (selectionMode == "multiple") && headerInput[0].checked ? "checked" : "";
      };
      if(typeof nodeName == "undefined"){

        nodeName = qxWeb.getNodeName(qxWeb(row.cells.item(0)));
      };
      var clazz = qx.ui.website.Table,inputName = this.getProperty("__inputName");
      var className = (nodeName == "th") ? clazz.__internalSelectionClass + " " + clazz.__internalHeaderClass : clazz.__internalSelectionClass;
      var currentInput = qxWeb(row).find("." + clazz.__internalSelectionClass);
      if(currentInput.length > 0){

        if(currentInput[0].type != type){

          currentInput[0].type = type;
        };
      } else {

        var id = qx.ui.website.Table.__getUID();
        var inputNode = qxWeb.create("<" + nodeName + " class='" + className + "'><input id='" + id + "' name='" + inputName + "' " + checked + " class='" + cssPrefix + "-" + type + " " + clazz.__internalInputClass + "' type='" + type + "' /><label class='" + clazz.__inputLabelClass + "' for='" + id + "'></label></" + nodeName + ">");
        if(row.cells.item(0)){

          inputNode.insertBefore(qxWeb(row.cells.item(0)));
        } else {

          inputNode.appendTo(qxWeb(row));
        };
      };
    },
    /**
    * Checks if a column with the specified name exists
    * @param columnName {String} The name of the column to check
    */
    __checkColumnExistance : function(columnName){

      var data = this.getProperty("__columnMeta");
      if(data && !data[columnName]){

        throw new Error("Column " + columnName + " does not exists !");
      };
    },
    /**
    * Returns the row containing the cells with the column names
    * @return {HTMLTableRowElement} The row with meta information
    */
    __getHeaderRow : function(){

      var tHeadOrFoot = this[0].tHead;
      if(!tHeadOrFoot){

        throw new Error("A Table header element is required for this widget.");
      };
      var rows = tHeadOrFoot.rows;
      if(rows.length == 1){

        return rows.item(0);
      } else {

        rows = qxWeb(".qx-table-header-row");
        if(rows.length > 0){

          return rows[0];
        };
      };
      return null;
    },
    /**
     * Initializes columns metadata
     * @param model {Array} The widget's model
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __getColumnMetaData : function(model){

      this.__addClassToHeaderAndFooter(this[0].tHead);
      this.__addClassToHeaderAndFooter(this[0].tFoot);
      var data = {
      },cells = null,colName = null,cell = null;
      var headerRow = this.__getHeaderRow();
      cells = headerRow.cells;
      for(var i = 0,l = cells.length;i < l;i++){

        cell = qxWeb(cells.item(i));
        colName = this.__getColumName(cell[0]) || qx.ui.website.Table.__getUID();
        if(!cell[0].getAttribute(qx.ui.website.Table.__dataColName)){

          cell.setAttribute(qx.ui.website.Table.__dataColName, colName);
        };
        data[colName] = {
          type : cell[0].getAttribute(qx.ui.website.Table.__dataColType) || "String",
          name : colName
        };
      };
      this.setProperty("__columnMeta", data);
      return this;
    },
    /**
     * Adds the internal css class to the header and footer cells
     * @param footOrHead {HTMLElement} Html element representing the header or footer of the table
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __addClassToHeaderAndFooter : function(footOrHead){

      if(footOrHead && footOrHead.rows.length > 0){

        if(footOrHead.rows.item(0).cells.length > 0){

          var row = this.__getHeaderRow();
          if(!qxWeb(row.cells.item(0)).hasClass(qx.ui.website.Table.__internalHeaderClass)){

            qxWeb(row.cells).addClass(qx.ui.website.Table.__internalHeaderClass);
          };
        };
      };
      return this;
    },
    /**
     * Sorts the rows of the table widget
     * @param dataRows {Array} Array containing the sorted rows
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __sortDOM : function(dataRows){

      for(var i = 0,l = dataRows.length;i < l;i++){

        if(i){

          qxWeb(dataRows[i]).insertAfter(dataRows[i - 1]);
        } else {

          qxWeb(dataRows[i]).insertBefore(qxWeb(this.__getRoot().rows.item(0)));
        };
      };
      this.setProperty("__dataRows", dataRows);
      return this;
    },
    /**
     * registers global events
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __registerEvents : function(){

      this.on("tap", this.__detectClickedCell);
      this.on("cellClick", function(data){

        if(data.cell && data.cell.hasClass(qx.ui.website.Table.__internalHeaderClass)){

          this.getProperty("__sortingFunction").bind(this)(data);
        };
      }, this);
      this.on("pointerover", this.__cellHover, this);
      this.on("pointerout", this.__cellOut, this);
      return this;
    },
    /**
    * Checks if the selection inputs are already rendered
    * @return {Boolean} True if the inputs are rendered and false otherwise
    */
    __selectionRendered : function(){

      return qxWeb("." + qx.ui.website.Table.__internalSelectionClass).length > 0;
    },
    /**
    * Handles clicks that happen on the selection inputs
    * @param cell {qxWeb} The table cell containing the clicked input
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    __processSelection : function(cell){

      var clazz = qx.ui.website.Table;
      var inputs = qxWeb("." + clazz.__internalInputClass);
      var clickedInput = cell.find("input");
      var selectionMode = this.getConfig("rowSelection");
      var headerInput = qxWeb("." + clazz.__internalHeaderClass + " input");
      var selection = [];
      if(selectionMode == "multiple"){

        if(cell.hasClass(clazz.__internalHeaderClass)){

          inputs.setAttribute("checked", clickedInput[0].checked);
        };
        var checked = true;
        for(var i = 0;i < inputs.length;i++){

          if((inputs[i] != headerInput[0]) && (!inputs[i].checked)){

            checked = false;
            break;
          };
        };
        headerInput.setAttribute("checked", checked);
        inputs = inputs.toArray();
        if(checked){

          qxWeb.array.remove(inputs, headerInput[0]);
          selection = inputs;
        } else {

          selection = inputs.filter(function(input){

            return input.checked;
          });
        };
      } else {

        if(clickedInput[0] != headerInput[0]){

          selection.push(clickedInput[0]);
        };
      };
      var selectedRows = selection.map(function(elem){

        return elem.parentNode.parentNode;
      });
      selectedRows = qxWeb(selectedRows);
      qxWeb("." + clazz.__selectedRowClass).removeClass(clazz.__selectedRowClass);
      selectedRows.addClass(clazz.__selectedRowClass);
      this.emit("selectionChange", {
        rows : qxWeb(selectedRows)
      });
      return this;
    },
    /**
    * Fires a custom table events
    * @param eventType {String} The event type
    * @param cell {HTMLTableCellElement} The event target
    * @param target {HTMLElement} The native event target
    * @return {Map} Map containing the event data
    */
    __fireEvent : function(eventType, cell, target){

      var row = cell[0].parentNode,cells = row.cells;
      var colNumber = qx.ui.website.Table.__getIndex(cells, cell[0]);
      var tHead = this.__getHeaderRow();
      var headCell = tHead.cells.item(colNumber);
      var colName = this.__getColumName(headCell);
      var columnIndex = this.getConfig("rowSelection") != "none" ? this.__getColumnIndex(colName) - 1 : this.__getColumnIndex(colName);
      var data = {
        cell : qxWeb(cell),
        row : qxWeb(row),
        target : target,
        columnIndex : columnIndex,
        columnName : colName
      };
      this.emit(eventType, data);
      return data;
    },
    /**
     * Click callbak
     *
     * @param e {Event} The native click event.
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __detectClickedCell : function(e){

      var target = e.getTarget();
      var cell = qxWeb(target);
      var clazz = qx.ui.website.Table;
      while(!(cell.hasClass(clazz.__internalCellClass) || cell.hasClass(clazz.__internalHeaderClass) || cell.hasClass(clazz.__internalSelectionClass))){

        if(cell.hasClass(this.classname)){

          cell = null;
          break;
        };
        cell = cell.getParents().eq(0);
      };
      if(cell.hasClass(clazz.__internalSelectionClass)){

        window.setTimeout(function(){

          this.__processSelection(cell);
        }.bind(this), 5);
      } else {

        if(cell && cell.length > 0){

          this.__fireEvent("cellClick", cell, target);
        };
      };
      return this;
    },
    /**
    * Pointerover callback
    *
    * @param e {Event} The native over event.
    */
    __cellHover : function(e){

      var target = e.getTarget();
      var cell = qxWeb(target);
      var hovered = this.getProperty("__hovered");
      if(!cell.hasClass("qx-table-cell") && !cell.hasClass("qx-table-header")){

        cell = cell.getClosest(".qx-table-cell, .qx-table-header");
      };
      if(cell && (cell.length > 0) && ((hovered && (hovered.cell[0] != cell[0])) || (!hovered)) && !cell.hasClass("qx-table-row-selection")){

        if(hovered){

          this.emit("cellOut", this.getProperty("__hovered"));
        };
        this.setProperty("__hovered", this.__fireEvent("cellHover", cell, target));
      };
    },
    /**
    * pointerout callback
    *
    * @param e {Event} The native over event.
    */
    __cellOut : function(e){

      var relatedTarget = e.getRelatedTarget();
      var cell = qxWeb(relatedTarget);
      if(this.getProperty("__hovered")){

        if(!cell.isChildOf(this)){

          this.emit("cellOut", this.getProperty("__hovered"));
          this.setProperty("__hovered", null);
        } else {

          if(!cell.hasClass("qx-table-cell") && !cell.hasClass("qx-table-header")){

            cell = cell.getClosest(".qx-table-cell, .qx-table-header");
            if(cell.hasClass("qx-table-row-selection")){

              this.emit("cellOut", this.getProperty("__hovered"));
              this.setProperty("__hovered", null);
            };
          };
        };
      };
    },
    /**
     * Applies the given model to the table cells depending on
     * the mustache template specified before
     * @param model {Array} The model to apply
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    __applyTemplate : function(model){

      if(model && model.length > 0){

        var cell,row;
        var tHead = this.__getHeaderRow();
        var createdRow = null,colMeta = null;
        var renderedRow = null;
        var inputType = (this.getConfig("rowSelection") == "single") ? "radio" : "checkbox";
        if(this.__getRoot().rows.length > model.length){

          this.__deleteRows(model.length);
        };
        var renderedColIndex = 0,templateApplied = false;
        var coltemplate = this.getTemplate("columnDefault");
        var colName = null;
        for(var i = 0,rowCount = model.length;i < rowCount;i++){

          row = model[i];
          if(!this.__isRowRendered(i)){

            createdRow = this.__getRoot().insertRow(i);
            if(this.__selectionRendered()){

              this.__createInput(createdRow, inputType, "td");
            };
          };
          for(var j = 0,colCount = row.length;j < colCount;j++){

            renderedColIndex = this.__selectionRendered() ? j + 1 : j;
            colName = this.__getColumName(tHead.cells.item(renderedColIndex));
            colMeta = this.__getDataForColumn(colName);
            coltemplate = this.getTemplate(colName) || coltemplate;
            renderedRow = this.__getRoot().rows.item(i);
            cell = qxWeb.create(qxWeb.template.render(coltemplate, model[i][j]))[0];
            if(cell.nodeName.toUpperCase() != "TD"){

              break;
            };
            if(!this.__isCellRendered(i, renderedColIndex)){

              renderedRow.appendChild(cell);
            } else {

              renderedRow.replaceChild(cell, this.getCell(i, renderedColIndex)[0]);
            };
            this.emit("cellRender", {
              cell : cell,
              row : i,
              col : j,
              value : model[i][j]
            });
          };
          if(i == rowCount - 1){

            templateApplied = true;
          };
        };
        if(templateApplied){

          this.emit("modelApplied", model);
        };
      };
      return this;
    },
    /**
    * Removes row from the DOM starting from the specified index
    * @param  rowCount {Integer} The number of rows the kept
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    __deleteRows : function(rowCount){

      var renderedRows = this.__getRoot().rows;
      while(renderedRows.length > rowCount){

        this[0].deleteRow(renderedRows.length);
      };
      return this;
    },
    /**
    * Gets the metadata of the column width the specified name
    * @param columName {String} The name of the column to get the metadata for
    * @return {Map} Map containing the metadata
    */
    __getDataForColumn : function(columName){

      return this.getProperty("__columnMeta")[columName];
    },
    /**
     * Gets the Root element contening the data rows
     * @return {HTMLElement} The element containing the data rows
     */
    __getRoot : function(){

      return this[0].tBodies.item(0) || this[0];
    },
    /**
     * Checks if the row with the given index is rendered
     * @param index {Integer} The index of the row to check
     * @return {Boolean} The result of the check
     */
    __isRowRendered : function(index){

      if(this.__getRoot().rows.item(index)){

        return true;
      };
      return false;
    },
    /**
     * Checks if the cell with the given row and column indexes is rendered
     * @param rowIndex {Integer} The index of the row to check
     * @param colIndex {Integer} The index of the column
     * @return {Boolean} The result of the check
     */
    __isCellRendered : function(rowIndex, colIndex){

      if(!this.__isRowRendered(rowIndex)){

        return false;
      };
      if(this.__getRoot().rows.item(rowIndex).cells.item(colIndex)){

        return true;
      };
      return false;
    },
    /**
     * Adds a class to the head and footer of the current sorted column
     * @param columnName {String} The name of the sorted column
     * @param dir {String} The sorting direction
     */
    setSortingClass : function(columnName, dir){

      var data = {
        columnName : columnName,
        direction : dir
      };
      this.setProperty("__sortingData", data);
      this.__addSortingClassToCol(this[0].tHead, columnName, dir);
    },
    /**
     * Adds a class to the head or footer of the current sorted column
     * @param HeaderOrFooter {Node} The n
     * @param columnName {String} The name of the sorted column
     * @param dir {String} The sorting direction
     */
    __addSortingClassToCol : function(HeaderOrFooter, columnName, dir){

      var rows = this.__getHeaderRow();
      if(HeaderOrFooter && rows){

        qxWeb(rows.cells).removeClasses(["qx-table-sort-asc", "qx-table-sort-desc"]);
        var cell = qxWeb("[" + qx.ui.website.Table.__dataColName + "='" + columnName + "'], #" + columnName);
        cell.addClass("qx-table-sort-" + dir);
      };
    },
    /**
     * Sorts the table rows for the given row and direction
     * @param columnName {String} The name of the column to be sorted
     * @param direction {String} The sorting direction
     * @return {Array} Array containinfg the sorted rows
     */
    __sort : function(columnName, direction){

      var meta = this.__getDataForColumn(columnName);
      var columnType = qxWeb.string.firstUp(meta.type);
      if(!this["_compare" + columnType] && !this.getProperty("_compare" + columnType)){

        columnType = "String";
      };
      var compareFunc = this.getCompareFunction(columnType).bind(this);
      var model = this.__getDataRows();
      var columnIndex = this.__getColumnIndex(columnName);
      return model.sort(function(a, b){

        var x = this.__getSortingKey(qxWeb(a.cells.item(columnIndex)));
        var y = this.__getSortingKey(qxWeb(b.cells.item(columnIndex)));
        return compareFunc(x, y, direction);
      }.bind(this));
    },
    /**
     * Compares two number
     * @param x {String} The String value of the first number to compare
     * @param y {String} The String value of the second number to compare
     * @param direction {String} The sorting direction
     * @return {Integer} The result of the comparison
     */
    _compareNumber : function(x, y, direction){

      x = qx.ui.website.Table.__isNumber(x) ? Number(x) : 0;
      y = qx.ui.website.Table.__isNumber(y) ? Number(y) : 0;
      if(direction == "asc"){

        return x - y;
      } else if(direction == "desc"){

        return y - x;
      };
      return 0;
    },
    /**
    * Gets the name of the column containing the given cell
    * @param headerCell {HTMLTableCellElement} The cell to get the column name for
    * @return {String} The column name
    */
    __getColumName : function(headerCell){

      return headerCell.getAttribute(qx.ui.website.Table.__dataColName) || headerCell.getAttribute("id");
    },
    /**
     * Compares two Dates
     * @param x {String} The String value of the first date to compare
     * @param y {String} The String value of the second date to compare
     * @param direction {String} The sorting direction
     * @return {Integer} The result of the comparison
     */
    _compareDate : function(x, y, direction){

      x = qx.ui.website.Table.__isDate(x) ? new Date(x) : new Date(0);
      y = qx.ui.website.Table.__isDate(y) ? new Date(y) : new Date(0);
      if(direction == "asc"){

        return x - y;
      } else if(direction == "desc"){

        return y - x;
      };
      return 0;
    },
    /**
     * Compares two Strings
     * @param x {String} The first string to compare
     * @param y {String} The second string to compare
     * @param direction {String} The sorting direction
     * @return {Integer} The result of the comparison
     */
    _compareString : function(x, y, direction){

      if(!this.getConfig("caseSensitive")){

        x = x.toLowerCase();
        y = y.toLowerCase();
      };
      if(direction == "asc"){

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      } else if(direction == "desc"){

        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      };
      return 0;
    },
    /**
    * Returns the value of the cell to use for sorting
    * @param cell {qxWeb} The cell to get the value of.
    * @return {String} The sorting key
    */
    __getSortingKey : function(cell){

      return cell.getAttribute(qx.ui.website.Table.__dataSortingKey) || this.__getCellValue(cell);
    },
    /**
     * Returns the value of the cell that will be used for sorting
     * @param cell {qxWeb} The cell to get the value of
     * @return {String} The text content of the cell
     */
    __getCellValue : function(cell){

      return cell.getTextContent() || "";
    },
    /**
     * Gets the table's data rows from the DOM
     * @return {Array} Array containing the rows of the table
     */
    __getDataRows : function(){

      var rows = this.find("tbody")[0].rows,model = [],cell = null,cells = [];
      for(var i = 0,l = rows.length;i < l;i++){

        cells = rows.item(i).cells;
        if((cells.length > 0) && (cells[0].nodeName.toUpperCase() != "TD")){

          continue;
        };
        for(var j = 0,len = cells.length;j < len;j++){

          cell = qxWeb(cells[j]);
          if(!cell.hasClass(qx.ui.website.Table.__internalCellClass)){

            cell.addClass(qx.ui.website.Table.__internalCellClass);
          };
        };
        model.push(rows.item(i));
      };
      return model;
    },
    /**
     * Default sorting processing
     * @param data {Map} Sorting data
     */
    __defaultColumnSort : function(data){

      var dir = "asc";
      var sortedData = this.getSortingData();
      if(sortedData){

        if(data.columnName == sortedData.columnName){

          if(sortedData.direction == dir){

            dir = "desc";
          };
        };
      };
      if(data.cell.hasClass("qx-table-header")){

        this.sort(data.columnName, dir);
      };
    },
    /**
    * Default column filter function
    * @param data {Map} Map containing the filter data
    * @return {Boolean} True wenn the row containing the current cell should be kept
    */
    __defaultColumnFilter : function(data){

      var caseSensitive = this.getConfig("caseSensitive");
      var cell = data.columnName == qx.ui.website.Table.__allColumnSelector ? data.row : data.cell;
      var cellValue = this.__getCellValue(cell);
      if(caseSensitive){

        return cellValue.indexOf(data.keyword) != -1;
      } else {

        return cellValue.toLowerCase().indexOf(data.keyword.toLowerCase()) != -1;
      };
    },
    /**
     * Gets the index of the column with the specified name
     * @param columnName {String} The colukn name
     * @return {Integer} The index of the column or -1 if the column does'nt exists
     */
    __getColumnIndex : function(columnName){

      var tHead = this.__getHeaderRow();
      var cells = tHead.cells;
      for(var i = 0;i < cells.length;i++){

        if(columnName == this.__getColumName(cells.item(i))){

          return i;
        };
      };
      return -1;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      table : statics.table
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * This is a calendar widget used to select a date. It contain a set of
 * buttons to switch to the next or previous month as well as a button for
 * each day in the month.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-calendar</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Calendar widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-container</code></td>
 *       <td>Container element (<code>table</code>)</td>
 *       <td>Identifies the table container of the Calendar widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-prev</code></td>
 *       <td><code>button</code></td>
 *       <td>Identifies and styles the "previous month" button</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-prev-container</code></td>
 *       <td>Container element (<code>td</code>)</td>
 *       <td>Identifies and styles the "previous month" container</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-next</code></td>
 *       <td><code>button</code></td>
 *       <td>Identifies and styles the "next month" button</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-next-container</code></td>
 *       <td>Container element (<code>td</code>)</td>
 *       <td>Identifies and styles the "next month" container</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-othermonth</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles calendar cells for days from the previous or following month</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-dayname</code></td>
 *       <td>Day name (<code>td</code>)</td>
 *       <td>Identifies and styles the day name cell</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-day</code></td>
 *       <td>Day (<code>button</code>)</td>
 *       <td>Identifies and styles the day buttons</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-weekday</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles the weekday cells</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-weekend</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles the weekend cells</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-selected</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles the cell containing the selected day's button</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @require(qx.module.Template)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Calendar", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * *controls*
     *
     * Template for the controls. This should be a <code>tr</code> tag containing
     * the first row of the calendar.
     *
     * Default value:
     * <pre><tr>
     *  <td colspan='1' class='{{cssPrefix}}-prev-container'><button class='{{cssPrefix}}-prev' title='Previous Month'>&lt;</button></td>
     *  <td colspan='5'>{{month}} {{year}}</td>
     *  <td colspan='1' class='{{cssPrefix}}-next-container'><button class='{{cssPrefix}}-next' title='Next Month'>&gt;</button></td>
     * </tr></pre>
     *
     *
     * *dayRow*
     *
     * Template for the row of each day. This should be a tr tag containing the day names.
     *
     * Default value:
     * <pre><tr>
     *  {{#row}}<td class='{{cssPrefix}}-dayname'>{{.}}</td>{{/row}}
     * </tr></pre>
     *
     *
     * *row*
     *
     * Template for the row of days. This should be a <code>tr</code> tag containing
     * a <code>button</code> for each day.
     *
     * Default value:
     * <pre><tr>
     *   {{#row}}<td class='{{cssClass}}'>
     *     <button class='{{cssPrefix}}-day' value='{{date}}'>{{day}}</button>
     *   </td>{{/row}}
     * </tr></pre>
     *
     *
     * *table*
     *
     * Wrapper template for all other templates. This should be a table.
     *
     * Default value:
     * <pre><table class='{{cssPrefix}}-container'><thead>{{{thead}}}</thead><tbody>{{{tbody}}}</tbody></table></pre>
     */
    _templates : {
      controls : "<tr>" + "<td colspan='1' class='{{cssPrefix}}-prev-container'><button class='{{cssPrefix}}-prev' {{prevDisabled}} title='Previous Month'>&lt;</button></td>" + "<td colspan='5' class='{{cssPrefix}}-month'>{{month}} {{year}}</td>" + "<td colspan='1' class='{{cssPrefix}}-next-container'><button class='{{cssPrefix}}-next' {{nextDisabled}} title='Next Month'>&gt;</button></td>" + "</tr>",
      dayRow : "<tr>" + "{{#row}}<td class='{{cssPrefix}}-dayname'>{{.}}</td>{{/row}}" + "</tr>",
      row : "<tr>" + "{{#row}}<td class='{{cssClass}}'><button class='{{cssPrefix}}-day' {{disabled}} value='{{date}}'>{{day}}</button></td>{{/row}}" + "</tr>",
      table : "<table class='{{cssPrefix}}-container'><thead>{{{thead}}}</thead><tbody>{{{tbody}}}</tbody></table>"
    },
    /**
     * *monthNames*
     *
     * Array of strings containing the names of the month.
     *
     * Default value:
     * <pre>["January", "February", "March", "April", "May", "June",
     *  "July", "August", "September", "October", "November", "December"]</pre>
     *
     *
     * *dayNames*
     *
     * Array of strings containing the day names.
     *
     * Default values:
     * <pre>["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]</pre>
     *
     * *minDate*
     *
     * Earliest user-selectable date (<code>Date</code> object). Default: <code>null</code> (no restriction).
     *
     * *maxDate*
     *
     * Latest user-selectable date (<code>Date</code> object). Default: <code>null</code> (no restriction).
     *
     * *selectableWeekDays*
     *
     * Array of user-selectable week days (Sunday is 0). Default: <code>[0, 1, 2, 3, 4, 5, 6]</code> (no restrictions).
     *
     * *selectionMode*
     *
     * The Selection mode the calendar will use. Possible values are 'single' and 'range' . Default: <code>single</code>
     */
    _config : {
      monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dayNames : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      minDate : null,
      maxDate : null,
      selectableWeekDays : [0, 1, 2, 3, 4, 5, 6],
      selectionMode : "single"
    },
    /**
     * Factory method which converts the current collection into a collection of
     * Calendar widgets. Therefore, an initialization process needs to be done which
     * can be configured with some parameter.
     *
     * @param date {Date?null} The initial Date of the calendar.
     * @return {qx.ui.website.Calendar} A new calendar collection.
     * @attach {qxWeb}
     */
    calendar : function(date){

      var calendar = new qx.ui.website.Calendar(this);
      calendar.init();
      if(date !== undefined){

        calendar.setValue(date);
      };
      return calendar;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  events : {
    /** Fired at each value change */
    "changeValue" : "Date"
  },
  members : {
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var today = new Date();
      this._normalizeDate(today);
      this._forEachElementWrapped(function(calendar){

        calendar.showValue(today);
      });
      return true;
    },
    // overridden
    render : function(){

      var minDate = this.getConfig("minDate");
      if(minDate){

        this._normalizeDate(minDate);
      };
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        this._normalizeDate(maxDate);
      };
      this.showValue(this.getProperty("shownValue"));
      this.setEnabled(this.getEnabled());
      return this;
    },
    // overridden
    setEnabled : function(value){

      var minDate = this.getConfig("minDate");
      var maxDate = this.getConfig("maxDate");
      var currentDate = null;
      this.base(arguments, value);
      if(value && (minDate || maxDate)){

        this.find("button.qx-calendar-day").map(function(button){

          currentDate = new Date(button.getAttribute("value"));
          button = qxWeb(button);
          // Disables a day when the current date is smaller than minDate
          if(minDate && currentDate < minDate){

            button.setAttribute("disabled", true);
          };
          // Disables a day when it current date is greater than maxDate
          if(maxDate && currentDate > maxDate){

            button.setAttribute("disabled", true);
          };
        });
      };
      return this;
    },
    /**
     * Sets the given date as the current value displays it
     *
     * @param value {Date|Array} Date or array of dates to be displayed.
     * @return {qx.ui.website.Calendar} The collection for chaining.
     */
    setValue : function(value){

      var minDate = this.getConfig("minDate");
      var maxDate = this.getConfig("maxDate");
      if(this.getConfig("selectionMode") == "single"){

        this._normalizeDate(value);
        if(this.getConfig("selectableWeekDays").indexOf(value.getDay()) == -1){

          throw new Error("The given date's week day is not selectable.");
        };
        if(minDate){

          this._normalizeDate(minDate);
          if(value < minDate){

            throw new Error("Given date " + value.toDateString() + " is earlier than configured minDate " + minDate.toDateString());
          };
        };
        if(maxDate){

          this._normalizeDate(maxDate);
          if(value > maxDate){

            throw new Error("Given date " + value.toDateString() + " is later than configured maxDate " + maxDate.toDateString());
          };
        };
      } else if(this.getConfig("selectionMode") == "range"){

        if(!this.getProperty("__range")){

          this.setProperty("__range", value.map(function(val){

            return val.toDateString();
          }));
        };
        if(value.length == 2){

          value.sort(function(a, b){

            return a - b;
          });
          value = this._generateRange(value);
        } else {

          this._normalizeDate(value[0]);
        };
      };
      this.setProperty("value", value);
      this.showValue(value);
      if((this.getConfig("selectionMode") == "single") || ((this.getConfig("selectionMode") == "range") && (value.length >= 1))){

        this.emit("changeValue", value);
      };
      return this;
    },
    /**
     * Returns the currently selected date of the first
     * calendar widget in the collection.
     *
     * @return {qx.ui.website.Calendar} The collection for chaining.
     */
    getValue : function(){

      var value = this.getProperty("value");
      return value ? (qx.Bootstrap.isArray(value) ? value : new Date(value)) : null;
    },
    /**
     * Displays the given date
     *
     * @param value {Date} Date to display.
     * @return {qx.ui.website.Calendar} The collection for chaining.
     */
    showValue : function(value){

      // If value is an array, show the last selected date
      value = qx.Bootstrap.isArray(value) ? value[value.length - 1] : value;
      this.setProperty("shownValue", value);
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(item){

        if(item.getAttribute("tabindex") < 0){

          item.setAttribute("tabindex", 0);
        };
        item.find("." + cssPrefix + "-prev").$offFirstCollection("tap", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").$offFirstCollection("tap", this._nextMonth, item);
        item.find("." + cssPrefix + "-day").$offFirstCollection("tap", this._selectDay, item);
        item.$offFirstCollection("focus", this._onFocus, item, true).$offFirstCollection("blur", this._onBlur, item, true);
      }, this);
      this.setHtml(this._getTable(value));
      this._forEachElementWrapped(function(item){

        item.find("." + cssPrefix + "-prev").$onFirstCollection("tap", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").$onFirstCollection("tap", this._nextMonth, item);
        item.find("td").not(".qx-calendar-invalid").find("." + cssPrefix + "-day").$onFirstCollection("tap", this._selectDay, item);
        item.$onFirstCollection("focus", this._onFocus, item, true).$onFirstCollection("blur", this._onBlur, item, true);
      }, this);
      return this;
    },
    /**
     * Displays the previous month
     */
    _prevMonth : function(){

      var shownValue = this.getProperty("shownValue");
      this.showValue(new Date(shownValue.getFullYear(), shownValue.getMonth() - 1));
    },
    /**
     * Displays the next month
     */
    _nextMonth : function(){

      var shownValue = this.getProperty("shownValue");
      this.showValue(new Date(shownValue.getFullYear(), shownValue.getMonth() + 1));
    },
    /**
     * Sets the current value to the day selected by the user
     * @param e {Event} The tap event.
     */
    _selectDay : function(e){

      var day = qxWeb(e.getTarget());
      var newStr = day.getAttribute("value");
      var newValue = new Date(newStr);
      if(this.getConfig("selectionMode") == "range"){

        if(!this.getProperty("__range")){

          this.setProperty("__range", []);
        };
        var range = this.getProperty("__range").slice(0);
        if(range.length == 2){

          range = [];
        };
        range.push(newStr);
        this.setProperty("__range", range);
        range = range.map(function(item){

          return new Date(item);
        });
        this.setValue(range);
        newStr = range;
      } else {

        this.setValue(newValue);
        newStr = [newStr];
      };
      newStr.forEach(function(str){

        this.find("." + this.getCssPrefix() + "-day[value='" + str + "']").focus();
      }.bind(this));
    },
    /**
     * Renders the calendar for the given date.
     *
     * @param date {Date} The date to render.
     * @return {String} The calendar HTML.
     */
    _getTable : function(date){

      var controls = qxWeb.template.render(this.getTemplate("controls"), this._getControlsData(date));
      var dayRow = qxWeb.template.render(this.getTemplate("dayRow"), this._getDayRowData());
      var data = {
        thead : controls + dayRow,
        tbody : this._getWeekRows(date),
        cssPrefix : this.getCssPrefix()
      };
      return qxWeb.template.render(this.getTemplate("table"), data);
    },
    /**
     * Returns the month and year to be displayed in the calendar controls.
     *
     * @param date {Date} The date to be displayed.
     * @return {Map} A map containing the month and year.
     */
    _getControlsData : function(date){

      var prevDisabled = "";
      var minDate = this.getConfig("minDate");
      if(minDate){

        this._normalizeDate(minDate);
        if(date.getMonth() <= minDate.getMonth()){

          prevDisabled = "disabled";
        };
      };
      var nextDisabled = "";
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        this._normalizeDate(maxDate);
        if(date.getMonth() >= maxDate.getMonth()){

          nextDisabled = "disabled";
        };
      };
      return {
        month : this.getConfig("monthNames")[date.getMonth()],
        year : date.getFullYear(),
        cssPrefix : this.getCssPrefix(),
        prevDisabled : prevDisabled,
        nextDisabled : nextDisabled
      };
    },
    /**
     * Returns the week day names to be displayed in the calendar.
     *
     * @return {String[]} Array of day names.
     */
    _getDayRowData : function(){

      return {
        row : this.getConfig("dayNames"),
        cssPrefix : this.getCssPrefix()
      };
    },
    /**
     * Returns the table rows displaying the days of the month.
     *
     * @param date {Date} The date to be displayed.
     * @return {String} The table rows as an HTML string.
     */
    _getWeekRows : function(date){

      date = qx.Bootstrap.isArray(date) ? date[date.length - 1] : date;
      var weeks = [];
      var value = null,valueString = null;
      var today = new Date();
      var helpDate = this._getHelpDate(date);
      var cssPrefix = this.getCssPrefix();
      var minDate = this.getConfig("minDate");
      if(minDate){

        this._normalizeDate(minDate);
      };
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        this._normalizeDate(maxDate);
      };
      if(qx.Bootstrap.isArray(this.getProperty("value"))){

        valueString = this.getProperty("value").map(function(currentDate){

          return currentDate.toDateString();
        });
      };
      for(var week = 0;week < 6;week++){

        var data = {
          row : []
        };
        for(var i = 0;i < 7;i++){

          var cssClasses = helpDate.getMonth() !== date.getMonth() ? cssPrefix + "-othermonth" : "";
          if((this.getConfig("selectionMode") == "range") && qx.Bootstrap.isArray(this.getProperty("value"))){

            if(valueString.indexOf(helpDate.toDateString()) != -1){

              cssClasses += " " + cssPrefix + "-selected";
            };
          } else {

            var range = this.getProperty("__range");
            if(this.getProperty("value")){

              value = this.getConfig("selectionMode") == "range" ? new Date(range[range.length - 1]) : this.getProperty("value");
              cssClasses += helpDate.toDateString() === value.toDateString() ? " " + cssPrefix + "-selected" : "";
            };
          };
          cssClasses += today.toDateString() === helpDate.toDateString() ? " " + cssPrefix + "-today" : "";
          var disabled = this.getEnabled() ? "" : "disabled";
          if((minDate && helpDate < minDate) || (maxDate && helpDate > maxDate) || this.getConfig("selectableWeekDays").indexOf(helpDate.getDay()) == -1){

            disabled = "disabled";
          };
          cssClasses += (helpDate.getDay() === 0 || helpDate.getDay() === 6) ? " " + cssPrefix + "-weekend" : " " + cssPrefix + "-weekday";
          data.row.push({
            day : helpDate.getDate(),
            date : helpDate.toDateString(),
            cssPrefix : cssPrefix,
            cssClass : cssClasses,
            disabled : disabled
          });
          helpDate.setDate(helpDate.getDate() + 1);
        };
        weeks.push(qxWeb.template.render(this.getTemplate("row"), data));
      };
      return weeks.join("");
    },
    /**
     * Returns a date instance for the first visible day to be displayed
     *
     * @param date {Date} Current date
     * @return {Date} Helper date
     */
    _getHelpDate : function(date){

      var startOfWeek = 1;
      //TODO: config option
      var helpDate = new Date(date.getFullYear(), date.getMonth(), 1);
      var firstDayOfWeek = helpDate.getDay();
      helpDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
      var nrDaysOfLastMonth = (7 + firstDayOfWeek - startOfWeek) % 7;
      helpDate.setDate(helpDate.getDate() - nrDaysOfLastMonth);
      return helpDate;
    },
    /**
     * Sets the hours, minutes and seconds of a date object to 0
     * to facilitate date comparisons.
     *
     * @param date {Date} Date to normalize
     */
    _normalizeDate : function(date){

      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    },
    /**
     * Attaches the keydown listener.
     *
     * @param e {Event} focus event
     */
    _onFocus : function(e){

      this.$onFirstCollection("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the keydown listener if the focus moves outside of the calendar.
     *
     * @param e {Event} blur event
     */
    _onBlur : function(e){

      if(this.contains(e.getRelatedTarget()).length === 0){

        this.$offFirstCollection("keydown", this._onKeyDown, this);
      };
    },
    /**
     * Keyboard handling.
     *
     * @param e {Event} The keydown event.
     */
    _onKeyDown : function(e){

      var cssPrefix = this.getCssPrefix();
      var target = qxWeb(e.getTarget());
      var key = e.getKeyIdentifier();
      var isDayButton = target.hasClass(cssPrefix + "-day");
      if(isDayButton){

        if(key == "Space"){

          this._selectDay(e);
        } else if(key == "Right"){

          e.preventDefault();
          this._focusNextDay(target);
        } else if(key == "Left"){

          e.preventDefault();
          this._focusPrevDay(target);
        };;
      } else {

        if(key == "Space"){

          if(target.hasClass(cssPrefix + "-prev")){

            e.preventDefault();
            this._prevMonth();
            this.find("." + cssPrefix + "-prev").focus();
          } else if(target.hasClass(cssPrefix + "-next")){

            e.preventDefault();
            this._nextMonth();
            this.find("." + cssPrefix + "-next").focus();
          };
        } else if(key == "Right"){

          e.preventDefault();
          this._nextMonth();
          this.find("." + cssPrefix + "-next").focus();
        } else if(key == "Left"){

          e.preventDefault();
          this._prevMonth();
          this.find("." + cssPrefix + "-prev").focus();
        };;
      };
      e.stopPropagation();
    },
    /**
     * Focuses the day button following the given one.
     *
     * @param currentDay {qxWeb} The button for the current day.
     */
    _focusNextDay : function(currentDay){

      var cssPrefix = this.getCssPrefix();
      var nextDayInWeek = currentDay.getParents().getNext();
      if(nextDayInWeek.length > 0){

        nextDayInWeek.getChildren("." + cssPrefix + "-day").focus();
      } else {

        var nextWeekRow = currentDay.getParents().getParents().getNext();
        if(nextWeekRow.length > 0){

          nextWeekRow.find("> td > ." + cssPrefix + "-day").getFirst().focus();
        } else {

          this._nextMonth();
          var oldDate = new Date(currentDay.getAttribute("value"));
          var newDate = new Date(oldDate.valueOf());
          newDate.setDate(oldDate.getDate() + 1);
          var buttonVal = newDate.toDateString();
          this.find("." + cssPrefix + "-day[value='" + buttonVal + "']").focus();
        };
      };
    },
    /**
     * Focuses the day button preceding the given one.
     *
     * @param currentDay {qxWeb} The button for the current day.
     */
    _focusPrevDay : function(currentDay){

      var cssPrefix = this.getCssPrefix();
      var prevDayInWeek = currentDay.getParents().getPrev();
      if(prevDayInWeek.length > 0){

        prevDayInWeek.getChildren("." + cssPrefix + "-day").focus();
      } else {

        var prevWeekRow = currentDay.getParents().getParents().getPrev();
        if(prevWeekRow.length > 0){

          prevWeekRow.find("> td > ." + cssPrefix + "-day").getLast().focus();
        } else {

          this._prevMonth();
          var oldDate = new Date(currentDay.getAttribute("value"));
          var newDate = new Date(oldDate.valueOf());
          newDate.setDate(oldDate.getDate() - 1);
          var buttonVal = newDate.toDateString();
          this.find("." + cssPrefix + "-day[value='" + buttonVal + "']").focus();
        };
      };
    },
    /**
    * Generates a date list depending on the given range
    *
    * @param range {Array} Array containing the start and end values on the range
    * @return {Array} Array with all the date objects contained in the given range
    */
    _generateRange : function(range){

      var list = [],current = range[0];
      var minDate = this.getConfig("minDate") ? this.getConfig("minDate") : new Date(range[0].toDateString());
      var maxDate = this.getConfig("maxDate") ? this.getConfig("maxDate") : new Date(range[1].toDateString());
      this._normalizeDate(minDate);
      this._normalizeDate(maxDate);
      while(current <= range[1]){

        this._normalizeDate(current);
        list.push(new Date(current.toDateString()));
        current.setDate(current.getDate() + 1);
      };
      // Removing non selectable days
      list = list.filter(function(date){

        return this.getConfig("selectableWeekDays").indexOf(date.getDay()) != -1;
      }, this);
      if(list.length == 0){

        throw new Error("Given date range is not valid. Please verify the 'selectableWeekDays' config");
      };
      // Removing days out of defined min/max range
      list = list.filter(function(date){

        return (date >= minDate) && (date <= maxDate);
      }, this);
      if(list.length == 0){

        throw new Error("Given date range is not valid. Please verify the 'minDate' and 'maxDate' configs");
      };
      return list;
    },
    dispose : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(item){

        item.find("." + cssPrefix + "-prev").$offFirstCollection("tap", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").$offFirstCollection("tap", this._nextMonth, item);
        item.find("." + cssPrefix + "-day").$offFirstCollection("tap", this._selectDay, item);
        item.$offFirstCollection("focus", this._onFocus, item, true).$offFirstCollection("blur", this._onBlur, item, true).$offFirstCollection("keydown", this._onKeyDown, item);
      }, this);
      this.setHtml("");
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      calendar : statics.calendar
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2014 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * This is a date picker widget used to combine an input element with a calendar widget
 * to select a date. The calendar itself is opened as popup to save visual space.
 *
 * <h2>Markup</h2>
 * Each Date Picker widget is connected to an existing input element.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-datepicker</code></td>
 *       <td>Input element</td>
 *       <td>Identifies the date picker widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-datepicker-icon</code></td>
 *       <td>Icon element</td>
 *       <td>Identifies the (if configured) image element to open the date picker</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * @require(qx.module.Template)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.DatePicker", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * *format*
     *
     * Function which is provided with a JavaScript Date object instance. You can provide
     * an own format function to manipulate the value which is set to the associated input element.
     *
     * Default value:
     * <pre>function(date) {
        return date.toLocaleDateString();
      }</pre>
     *
     * *readonly*
     *
     * Boolean value to control if the connected input element is read-only.
     *
     * Default value:
     * <pre>true</pre>
     *
     * *icon*
     *
     * Path to an icon which will be placed next to the input element as additional opener. If configured
     * a necessary <code>img</code> element is created and equipped with the <code>qx-datepicker-icon</code>
     * CSS class to style it.
     *
     * Default value:
     * <pre>null</pre>
     *
     * *mode*
     *
     * Which control should trigger showing the date picker.
     * Possible values are <code>input</code>, <code>icon</code>, <code>both</code>.
     *
     * Default value:
     * <pre>input</pre>
     */
    _config : {
      format : function(date){

        return date.toLocaleDateString();
      },
      readonly : true,
      icon : null,
      mode : 'input'
    },
    /**
     * Factory method which converts the current collection into a collection of
     * Date Picker widgets. Therefore, an initialization process needs to be done which
     * can be configured with some parameter.
     *
     * @param date {Date?null} The initial Date of the calendar.
     * @return {qx.ui.website.DatePicker} A new date picker collection.
     * @attach {qxWeb}
     */
    datepicker : function(date){

      var datepicker = new qx.ui.website.DatePicker(this);
      datepicker.init(date);
      return datepicker;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    /**
     * Get the associated calendar widget
     * @return {qx.ui.website.Calendar} calendar widget instance
     */
    getCalendar : function(){

      var calendarCollection = qxWeb();
      this._forEachElementWrapped(function(datepicker){

        calendarCollection = calendarCollection.concat(qxWeb('div#' + datepicker.getProperty('calendarId')));
      });
      return calendarCollection;
    },
    // overridden
    /**
     * Initializes the date picker widget
     *
     * @param date {Date} A JavaScript Date object to set the current date
     * @return {Boolean} <code>true</code> if the widget has been initialized
     */
    init : function(date){

      if(!this.base(arguments)){

        return false;
      };
      this._forEachElementWrapped(function(datepicker){

        var uniqueId = Math.round(Math.random() * 10000);
        datepicker.setProperty('uniqueId', uniqueId);
        this.__setReadOnly(datepicker);
        this.__setIcon(datepicker);
        this.__addInputListener(datepicker);
        var calendarId = 'datepicker-calendar-' + uniqueId;
        var calendar = qxWeb.create('<div id="' + calendarId + '"></div>').calendar();
        calendar.on('tap', this._onCalendarTap);
        calendar.appendTo(document.body).hide();
        // create the connection between the date picker and the corresponding calendar widget
        datepicker.setProperty('calendarId', calendarId);
        // grab tap events at the body element to be able to hide the calender popup
        // if the user taps outside
        var bodyElement = qxWeb.getDocument(datepicker).body;
        qxWeb(bodyElement).on('tap', datepicker._onBodyTap, datepicker);
        // react on date selection
        calendar.on('changeValue', datepicker._calendarChangeValue, datepicker);
        if(date !== undefined){

          calendar.setValue(date);
        };
      });
      return true;
    },
    // overridden
    render : function(){

      this.getCalendar().render();
      this._forEachElementWrapped(function(datepicker){

        this.__setReadOnly(datepicker);
        this.__setIcon(datepicker);
        this.__addInputListener(datepicker);
      });
      this.setEnabled(this.getEnabled());
      return this;
    },
    /**
     * Listener which handles clicks/taps on the associated input element and
     * opens / hides the calendar.
     *
     * @param e {Event} tap event
     */
    _onTap : function(e){

      if(!this.getEnabled()){

        return;
      };
      var calendar = qxWeb('div#' + this.getProperty('calendarId'));
      if(calendar.getStyle("display") == "none"){

        this.getCalendar().show().placeTo(this, 'bottom-left');
      } else {

        this.getCalendar().hide();
      };
    },
    /**
     * Stop tap events from reaching the body so the calendar won't close
     * @param e {Event} Tap event
     */
    _onCalendarTap : function(e){

      e.stopPropagation();
    },
    /**
     * Listener to the body element to be able to hide the calendar if the user clicks
     * or taps outside the calendar.
     *
     * @param e {Event} tap event
     */
    _onBodyTap : function(e){

      var target = qxWeb(e.getTarget());
      // fast check for tap on the connected input field
      if(this.length > 0 && target.length > 0 && this[0] == target[0]){

        return;
      };
      // fast check for tap on the configured icon
      if(this.getConfig('icon') !== null){

        var icon = qxWeb('#' + this.getProperty('iconId'));
        if(icon.length > 0 && target.length > 0 && icon[0] == target[0]){

          return;
        };
      };
      // otherwise check if the target is a child of the (rendered) calendar
      if(this.getCalendar().isRendered()){

        var tappedCol = qxWeb(e.getTarget());
        if(tappedCol.isChildOf(this.getCalendar()) === false){

          this.getCalendar().hide();
        };
      };
    },
    /**
     * Listens to value selection of the calendar, Whenever the user selected a day
     * we write it back to the input element and hide the calendar.
     *
     * The format of the date can be controlled with the 'format' config function
     *
     * @param e {Event} selected date value
     */
    _calendarChangeValue : function(e){

      var formattedValue = this.getConfig('format').call(this, e);
      this.setValue(formattedValue);
      this.getCalendar().hide();
    },
    /**
     * Helper method to set the readonly status on the input element
     *
     * @param collection {qxWeb} collection to work on
     */
    __setReadOnly : function(collection){

      if(collection.getConfig('readonly')){

        collection.setAttribute('readonly', 'readonly');
      } else {

        collection.removeAttribute('readonly');
      };
    },
    /**
     * Helper method to add / remove an icon next to the input element
     *
     * @param collection {qxWeb} collection to work on
     */
    __setIcon : function(collection){

      var icon;
      if(collection.getConfig('icon') === null){

        icon = collection.getNext('img#' + collection.getProperty('iconId'));
        if(icon.length === 1){

          icon.off('tap', this._onTap, collection);
          icon.remove();
        };
      } else {

        var iconId = 'datepicker-icon-' + collection.getProperty('uniqueId');
        // check if there is already an icon
        if(collection.getProperty('iconId') === undefined){

          collection.setProperty('iconId', iconId);
          icon = qxWeb.create('<img>');
          icon.setAttributes({
            id : iconId,
            src : collection.getConfig('icon')
          });
          icon.addClass(this.getCssPrefix() + '-icon');
          var openingMode = collection.getConfig('mode');
          if(openingMode === 'icon' || openingMode === 'both'){

            icon.on('tap', this._onTap, collection);
          };
          icon.insertAfter(collection);
        };
      };
    },
    /**
     * Helper method to add a listener to the connected input element
     * if the configured mode is set.
     *
     * @param collection {qxWeb} collection to work on
     */
    __addInputListener : function(collection){

      if(collection.getConfig('mode') === 'icon'){

        collection.$offFirstCollection('tap', collection._onTap);
      } else {

        collection.$onFirstCollection('tap', collection._onTap);
      };
    },
    // overridden
    dispose : function(){

      this._forEachElementWrapped(function(datepicker){

        datepicker.removeAttribute('readonly');
        datepicker.getNext('img#' + datepicker.getProperty('iconId')).remove();
        datepicker.$offFirstCollection('tap', datepicker._onTap);
        var bodyElement = qxWeb.getDocument(datepicker).body;
        qxWeb(bodyElement).off('tap', datepicker._onBodyTap, datepicker);
        datepicker.getCalendar().off('changeValue', this._calendarChangeValue, datepicker).off('tap', this._onCalendarTap);
        var calendar = qxWeb('div#' + datepicker.getProperty('calendarId'));
        calendar.remove();
        calendar.dispose();
      });
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      datepicker : statics.datepicker
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * This is a simple rating widget which can be used to display a predefined
 * number of symbols which the user can click or tap to give a rating e.g.
 * 3 out of 5 stars.
 *
 * <h2>Markup</h2>
 * Each rating item is a span element. Span elements already existing within
 * the Rating's container will be used, otherwise new elements will be added or
 * removed according to the <code>length</code> config option.
 *
 * <h2>CSS Classes</h2>
 * <table>
 *   <thead>
 *     <tr>
 *       <td>Class Name</td>
 *       <td>Applied to</td>
 *       <td>Description</td>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><code>qx-rating</code></td>
 *       <td>Container element</td>
 *       <td>Identifies the Rating widget</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-rating-item</code></td>
 *       <td>Rating item (span)</td>
 *       <td>Identifies and styles an active Rating item</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-rating-item-off</code></td>
 *       <td>Rating item (span)</td>
 *       <td>Identifies and styles an inactive Rating item. Applied in addition to <code>qx-rating-item</code></td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Rating", {
  extend : qx.ui.website.Widget,
  statics : {
    /**
     * *length*
     *
     * The length of the rating widget.
     *
     * Default value: <pre>5</pre>
     *
     *
     * *symbol*
     *
     * The symbol used to render the rating items. This can be any
     * String e.g. a UTF-8 character.
     *
     * Default value: <pre>★</pre>
     */
    _config : {
      length : 5,
      symbol : "★"
    },
    /**
     * Factory method which converts the current collection into a collection of
     * rating widgets. Therefore, an initialization process needs to be done which
     * can be configured with some parameter.
     *
     * @param initValue {Number?0} The initial value of the rating.
     * @param symbol {String?"★"} The symbol which should be used for each rating item.
     * @param length {Number?5} The length of the rating widget.
     * @return {qx.ui.website.Rating} A new rating collection.
     * @attach {qxWeb}
     */
    rating : function(initValue, symbol, length){

      var rating = new qx.ui.website.Rating(this);
      rating.init();
      var modified = false;
      if(length != undefined && length != rating.getConfig("length")){

        rating.setConfig("length", length);
        modified = true;
      };
      if(symbol != undefined){

        rating.setConfig("symbol", symbol);
        modified = true;
      };
      if(modified){

        rating.render();
      };
      if(initValue != undefined){

        rating.setValue(initValue);
      };
      return rating;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  events : {
    /** Fired at each value change */
    "changeValue" : "Number"
  },
  members : {
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      this._updateSymbolLength();
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(rating){

        if(rating.getAttribute("tabindex") < 0){

          rating.setAttribute("tabindex", 0);
        };
        rating.$onFirstCollection("focus", this._onFocus, rating).$onFirstCollection("blur", this._onBlur, rating).getChildren("span").addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).$onFirstCollection("tap", this._onTap, rating);
      }.bind(this));
      return true;
    },
    /**
     * Sets the given value of the raining widget's in the collection. The value will be
     * converted to the maximum or minimum if our of range.
     *
     * @param value {Number} The value of the rating.
     * @return {qx.ui.website.Rating} <code>this</code> reference for chaining.
     */
    setValue : function(value){

      if(this.getValue() == value){

        return this;
      };
      if(value < 0){

        value = 0;
      };
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(rating){

        var children = rating.getChildren("span");
        children.removeClass(cssPrefix + "-item-off");
        children.slice(value, children.length).addClass(cssPrefix + "-item-off");
        rating.emit("changeValue", rating.getValue());
      });
      return this;
    },
    /**
     * Reads the current value of the first rating widget in the collection
     * from the DOM and returns it.
     *
     * @return {Number} The current value.
     */
    getValue : function(){

      var cssPrefix = this.getCssPrefix();
      return this.eq(0).getChildren("span").not("." + cssPrefix + "-item-off").length;
    },
    // overridden
    render : function(){

      this._updateSymbolLength();
    },
    /**
     * Checks the set length and adds / removes spans containing the rating symbol.
     *
     * @return {qx.ui.website.Rating} <code>this</code> reference for chaining.
     */
    _updateSymbolLength : function(){

      var cssPrefix = this.getCssPrefix();
      var length = this.getConfig("length");
      this._forEachElementWrapped(function(el){

        var children = el.getChildren();
        children.setHtml(this.getConfig("symbol"));
        var diff = length - children.length;
        if(diff > 0){

          for(var i = 0;i < diff;i++){

            qxWeb.create("<span>" + this.getConfig("symbol") + "</span>").$onFirstCollection("tap", el._onTap, el).addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).appendTo(el);
          };
        } else {

          for(var i = 0;i < Math.abs(diff);i++){

            el.getChildren().getLast().$offFirstCollection("tap", el._onTap, el).remove();
          };
        };
      }.bind(this));
      return this;
    },
    /**
     * Tap handler which updates the value depending on the selected element.
     *
     * @param e {Event} tap event
     */
    _onTap : function(e){

      var parents = qxWeb(e.getTarget()).getParents();
      this.setValue(parents.getChildren().indexOf(e.getTarget()) + 1);
    },
    /**
     * Attaches the keydown listener.
     * @param e {Event} The native focus event.
     */
    _onFocus : function(e){

      qxWeb(document.documentElement).on("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the keydown listener if the widget loses focus.
     *
     * @param e {Event} The native blur event.
     */
    _onBlur : function(e){

      qxWeb(document.documentElement).off("keydown", this._onKeyDown, this);
    },
    /**
     * Changes the value if the left or right arrow key is pressed.
     *
     * @param e {Event} The native keydown event.
     */
    _onKeyDown : function(e){

      var key = e.getKeyIdentifier();
      if(key === "Right"){

        this.setValue(this.getValue() + 1);
      } else if(key === "Left"){

        this.setValue(this.getValue() - 1);
      };
    },
    // overridden
    dispose : function(){

      this._forEachElementWrapped(function(rating){

        qxWeb(document.documentElement).off("keydown", this._onKeyDown, rating);
        rating.$offFirstCollection("focus", this._onFocus, rating).$offFirstCollection("blur", this._onBlur, rating);
        rating.getChildren("span").$offFirstCollection("tap", rating._onTap, rating);
      });
      this.setHtml("");
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      rating : statics.rating
    });
  }
});


var exp = envinfo["qx.export"];
if (exp) {
  for (var name in exp) {
    var c = exp[name].split(".");
    var root = window;
    for (var i=0; i < c.length; i++) {
      root = root[c[i]];
    };
    window[name] = root;
  }
}

window["qx"] = undefined;
try {
  delete window.qx;
} catch(e) {}

})();