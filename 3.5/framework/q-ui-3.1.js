/** qooxdoo v3.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"master:942cad0","qx.theme":"qx.theme.Modern","qx.version":"3.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v3.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
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
      "getAllData" : statics.getAllData
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
        if(value == null){

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
        return element.dataset[name];
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
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
     * TODOC
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
    onWidget : function(type, listener, ctx, useCapture){

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
     * TODOC
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
    offWidget : function(type, listener, ctx, useCapture){

      var propertyName = this.classname.replace(/\./g, "-") + "-context";
      this._forEachElementWrapped(function(item){

        var originalCtx = item.getProperty(propertyName);
        item.off(type, listener, originalCtx, useCapture);
      });
      return this;
    },
    /**
     * Fetches all elements having a data-attribute named <code>data-qx-class</code>
     * containing the class name of the desired widget and initialized the widgets.
     *
     * @attachStatic {qxWeb}
     */
    initWidgets : function(){

      qxWeb("*[data-qx-class]")._forEachElementWrapped(function(widget){

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

      return !this.getProperty("disabled");
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
      onWidget : statics.onWidget,
      offWidget : statics.offWidget,
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
 * Cross browser animation layer. It uses feature detection to check if CSS
 * animations are available and ready to use. If not, a JavaScript-based
 * fallback will be used.
 *
 * @require(qx.module.Css)
 * @require(qx.module.Event)
 */
qx.Bootstrap.define("qx.module.Animation", {
  events : {
    /** Fired when an animation starts. */
    "animationStart" : undefined,
    /** Fired when an animation has ended one iteration. */
    "animationIteration" : undefined,
    /** Fired when an animation has ended. */
    "animationEnd" : undefined
  },
  statics : {
    /**
     * Returns the stored animation handles. The handles are only
     * available while an animation is running.
     *
     * @internal
     * @return {Array} An array of animation handles.
     */
    getAnimationHandles : function(){

      var animationHandles = [];
      for(var i = 0;i < this.length;i++){

        animationHandles[i] = this[i].$$animation;
      };
      return animationHandles;
    },
    /**
     * Animation description used in {@link #fadeOut}.
     */
    _fadeOut : {
      duration : 700,
      timing : "ease-out",
      keep : 100,
      keyFrames : {
        '0' : {
          opacity : 1
        },
        '100' : {
          opacity : 0,
          display : "none"
        }
      }
    },
    /**
     * Animation description used in {@link #fadeIn}.
     */
    _fadeIn : {
      duration : 700,
      timing : "ease-in",
      keep : 100,
      keyFrames : {
        '0' : {
          opacity : 0
        },
        '100' : {
          opacity : 1
        }
      }
    },
    /**
     * Starts the animation with the given description.
     * The description should be a map, which could look like this:
     *
     * <pre class="javascript">
     * {
     *   "duration": 1000,
     *   "keep": 100,
     *   "keyFrames": {
     *     0 : {"opacity": 1, "scale": 1},
     *     100 : {"opacity": 0, "scale": 0}
     *   },
     *   "origin": "50% 50%",
     *   "repeat": 1,
     *   "timing": "ease-out",
     *   "alternate": false,
     *   "delay": 2000
     * }
     * </pre>
     *
     * *duration* is the time in milliseconds one animation cycle should take.
     *
     * *keep* is the key frame to apply at the end of the animation. (optional)
     *
     * *keyFrames* is a map of separate frames. Each frame is defined by a
     *   number which is the percentage value of time in the animation. The value
     *   is a map itself which holds css properties or transforms
     *   (Transforms only for CSS Animations).
     *
     * *origin* maps to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin">transform origin</a>
     * (Only for CSS animations).
     *
     * *repeat* is the amount of time the animation should be run in
     *   sequence. You can also use "infinite".
     *
     * *timing* takes one of these predefined values:
     *   <code>ease</code> | <code>linear</code> | <code>ease-in</code>
     *   | <code>ease-out</code> | <code>ease-in-out</code> |
     *   <code>cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)</code>
     *   (cubic-bezier only available for CSS animations)
     *
     * *alternate* defines if every other animation should be run in reverse order.
     *
     * *delay* is the time in milliseconds the animation should wait before start.
     *
     * @attach {qxWeb}
     * @param desc {Map} The animation's description.
     * @param duration {Number?} The duration in milliseconds of the animation,
     *   which will override the duration given in the description.
     * @return {qxWeb} The collection for chaining.
     */
    animate : function(desc, duration){

      qx.module.Animation._animate.bind(this)(desc, duration, false);
      return this;
    },
    /**
     * Starts an animation in reversed order. For further details, take a look at
     * the {@link #animate} method.
     * @attach {qxWeb}
     * @param desc {Map} The animation's description.
     * @param duration {Number?} The duration in milliseconds of the animation,
     *   which will override the duration given in the description.
     * @return {qxWeb} The collection for chaining.
     */
    animateReverse : function(desc, duration){

      qx.module.Animation._animate.bind(this)(desc, duration, true);
      return this;
    },
    /**
     * Animation execute either regular or reversed direction.
     * @param desc {Map} The animation's description.
     * @param duration {Number?} The duration in milliseconds of the animation,
     *   which will override the duration given in the description.
     * @param reverse {Boolean} <code>true</code>, if the animation should be reversed
     */
    _animate : function(desc, duration, reverse){

      this._forEachElement(function(el, i){

        // stop all running animations
        if(el.$$animation){

          el.$$animation.stop();
        };
        var handle;
        if(reverse){

          handle = qx.bom.element.Animation.animateReverse(el, desc, duration);
        } else {

          handle = qx.bom.element.Animation.animate(el, desc, duration);
        };
        var self = this;
        // only register for the first element
        if(i == 0){

          handle.on("start", function(){

            self.emit("animationStart");
          }, handle);
          handle.on("iteration", function(){

            self.emit("animationIteration");
          }, handle);
        };
        handle.on("end", function(){

          for(var i = 0;i < self.length;i++){

            if(self[i].$$animation){

              return;
            };
          };
          self.emit("animationEnd");
        }, el);
      });
    },
    /**
     * Manipulates the play state of the animation.
     * This can be used to continue an animation when paused.
     * @attach {qxWeb}
     * @return {qxWeb} The collection for chaining.
     */
    play : function(){

      for(var i = 0;i < this.length;i++){

        var handle = this[i].$$animation;
        if(handle){

          handle.play();
        };
      };
      return this;
    },
    /**
     * Manipulates the play state of the animation.
     * This can be used to pause an animation when running.
     * @attach {qxWeb}
     * @return {qxWeb} The collection for chaining.
     */
    pause : function(){

      for(var i = 0;i < this.length;i++){

        var handle = this[i].$$animation;
        if(handle){

          handle.pause();
        };
      };
      return this;
    },
    /**
     * Stops a running animation.
     * @attach {qxWeb}
     * @return {qxWeb} The collection for chaining.
     */
    stop : function(){

      for(var i = 0;i < this.length;i++){

        var handle = this[i].$$animation;
        if(handle){

          handle.stop();
        };
      };
      return this;
    },
    /**
     * Returns whether an animation is running or not.
     * @attach {qxWeb}
     * @return {Boolean} <code>true</code>, if an animation is running.
     */
    isPlaying : function(){

      for(var i = 0;i < this.length;i++){

        var handle = this[i].$$animation;
        if(handle && handle.isPlaying()){

          return true;
        };
      };
      return false;
    },
    /**
     * Returns whether an animation has ended or not.
     * @attach {qxWeb}
     * @return {Boolean} <code>true</code>, if an animation has ended.
     */
    isEnded : function(){

      for(var i = 0;i < this.length;i++){

        var handle = this[i].$$animation;
        if(handle && !handle.isEnded()){

          return false;
        };
      };
      return true;
    },
    /**
     * Fades in all elements in the collection.
     * @attach {qxWeb}
     * @param duration {Number?} The duration in milliseconds.
     * @return {qxWeb} The collection for chaining.
     */
    fadeIn : function(duration){

      // remove 'display: none' style
      this.setStyle("display", "");
      return this.animate(qx.module.Animation._fadeIn, duration);
    },
    /**
     * Fades out all elements in the collection.
     * @attach {qxWeb}
     * @param duration {Number?} The duration in milliseconds.
     * @return {qxWeb} The collection for chaining.
     */
    fadeOut : function(duration){

      return this.animate(qx.module.Animation._fadeOut, duration);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "animate" : statics.animate,
      "animateReverse" : statics.animateReverse,
      "fadeIn" : statics.fadeIn,
      "fadeOut" : statics.fadeOut,
      "play" : statics.play,
      "pause" : statics.pause,
      "stop" : statics.stop,
      "isEnded" : statics.isEnded,
      "isPlaying" : statics.isPlaying,
      "getAnimationHandles" : statics.getAnimationHandles
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
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Wrapper for {@link qx.bom.element.AnimationCss} and
 * {@link qx.bom.element.AnimationJs}. It offers the pubilc API and decides using
 * feature checks either to use CSS animations or JS animations.
 *
 * If you use this class, the restrictions of the JavaScript animations apply.
 * This means that you can not use transforms and custom bezier timing functions.
 */
qx.Bootstrap.define("qx.bom.element.Animation", {
  statics : {
    /**
     * This function takes care of the feature check and starts the animation.
     * It takes a DOM element to apply the animation to, and a description.
     * The description should be a map, which could look like this:
     *
     * <pre class="javascript">
     * {
     *   "duration": 1000,
     *   "keep": 100,
     *   "keyFrames": {
     *     0 : {"opacity": 1, "scale": 1},
     *     100 : {"opacity": 0, "scale": 0}
     *   },
     *   "origin": "50% 50%",
     *   "repeat": 1,
     *   "timing": "ease-out",
     *   "alternate": false,
     *   "delay" : 2000
     * }
     * </pre>
     *
     * *duration* is the time in milliseconds one animation cycle should take.
     *
     * *keep* is the key frame to apply at the end of the animation. (optional)
     *   Keep in mind that the keep key is reversed in case you use an reverse
     *   animation or set the alternate key and a even repeat count.
     *
     * *keyFrames* is a map of separate frames. Each frame is defined by a
     *   number which is the percentage value of time in the animation. The value
     *   is a map itself which holds css properties or transforms
     *   {@link qx.bom.element.Transform} (Transforms only for CSS Animations).
     *
     * *origin* maps to the transform origin {@link qx.bom.element.Transform#setOrigin}
     *   (Only for CSS animations).
     *
     * *repeat* is the amount of time the animation should be run in
     *   sequence. You can also use "infinite".
     *
     * *timing* takes one of the predefined value:
     *   <code>ease</code> | <code>linear</code> | <code>ease-in</code>
     *   | <code>ease-out</code> | <code>ease-in-out</code> |
     *   <code>cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)</code>
     *   (cubic-bezier only available for CSS animations)
     *
     * *alternate* defines if every other animation should be run in reverse order.
     *
     * *delay* is the time in milliseconds the animation should wait before start.
     *
     * @param el {Element} The element to animate.
     * @param desc {Map} The animations description.
     * @param duration {Integer?} The duration in milliseconds of the animation
     *   which will override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} AnimationHandle instance to control
     *   the animation.
     */
    animate : function(el, desc, duration){

      var onlyCssKeys = qx.bom.element.Animation.__hasOnlyCssKeys(el, desc.keyFrames);
      if(qx.core.Environment.get("css.animation") && onlyCssKeys){

        return qx.bom.element.AnimationCss.animate(el, desc, duration);
      } else {

        return qx.bom.element.AnimationJs.animate(el, desc, duration);
      };
    },
    /**
     * Starts an animation in reversed order. For further details, take a look at
     * the {@link #animate} method.
     * @param el {Element} The element to animate.
     * @param desc {Map} The animations description.
     * @param duration {Integer?} The duration in milliseconds of the animation
     *   which will override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} AnimationHandle instance to control
     *   the animation.
     */
    animateReverse : function(el, desc, duration){

      var onlyCssKeys = qx.bom.element.Animation.__hasOnlyCssKeys(el, desc.keyFrames);
      if(qx.core.Environment.get("css.animation") && onlyCssKeys){

        return qx.bom.element.AnimationCss.animateReverse(el, desc, duration);
      } else {

        return qx.bom.element.AnimationJs.animateReverse(el, desc, duration);
      };
    },
    /**
     * Detection helper which detects if only CSS keys are in
     * the animations key frames.
     * @param el {Element} The element to check for the styles.
     * @param keyFrames {Map} The keyFrames of the animation.
     * @return {Boolean} <code>true</code> if only css properties are included.
     */
    __hasOnlyCssKeys : function(el, keyFrames){

      var keys = [];
      for(var nr in keyFrames){

        var frame = keyFrames[nr];
        for(var key in frame){

          if(keys.indexOf(key) == -1){

            keys.push(key);
          };
        };
      };
      var transformKeys = ["scale", "rotate", "skew", "translate"];
      for(var i = 0;i < keys.length;i++){

        var key = qx.lang.String.camelCase(keys[i]);
        if(!(key in el.style)){

          // check for transform keys
          if(transformKeys.indexOf(keys[i]) != -1){

            continue;
          };
          // check for prefixed keys
          if(qx.bom.Style.getPropertyName(key)){

            continue;
          };
          return false;
        };
      };
      return true;
    }
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
 * Responsible for checking all relevant animation properties.
 *
 * Spec: http://www.w3.org/TR/css3-animations/
 *
 * @require(qx.bom.Stylesheet)
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.CssAnimation", {
  statics : {
    /**
     * Main check method which returns an object if CSS animations are
     * supported. This object contains all necessary keys to work with CSS
     * animations.
     * <ul>
     *  <li><code>name</code> The name of the css animation style</li>
     *  <li><code>play-state</code> The name of the play-state style</li>
     *  <li><code>start-event</code> The name of the start event</li>
     *  <li><code>iternation-event</code> The name of the iternation event</li>
     *  <li><code>end-event</code> The name of the end event</li>
     *  <li><code>fill-mode</code> The fill-mode style</li>
     *  <li><code>keyframes</code> The name of the keyframes selector.</li>
     * </ul>
     *
     * @internal
     * @return {Object|null} The described object or null, if animations are
     *   not supported.
     */
    getSupport : function(){

      var name = qx.bom.client.CssAnimation.getName();
      if(name != null){

        return {
          "name" : name,
          "play-state" : qx.bom.client.CssAnimation.getPlayState(),
          "start-event" : qx.bom.client.CssAnimation.getAnimationStart(),
          "iteration-event" : qx.bom.client.CssAnimation.getAnimationIteration(),
          "end-event" : qx.bom.client.CssAnimation.getAnimationEnd(),
          "fill-mode" : qx.bom.client.CssAnimation.getFillMode(),
          "keyframes" : qx.bom.client.CssAnimation.getKeyFrames()
        };
      };
      return null;
    },
    /**
     * Checks for the 'animation-fill-mode' CSS style.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getFillMode : function(){

      return qx.bom.Style.getPropertyName("AnimationFillMode");
    },
    /**
     * Checks for the 'animation-play-state' CSS style.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getPlayState : function(){

      return qx.bom.Style.getPropertyName("AnimationPlayState");
    },
    /**
     * Checks for the style name used for animations.
     * @internal
     * @return {String|null} The name of the style or null, if the style is
     *   not supported.
     */
    getName : function(){

      return qx.bom.Style.getPropertyName("animation");
    },
    /**
     * Checks for the event name of animation start.
     * @internal
     * @return {String} The name of the event.
     */
    getAnimationStart : function(){

      var mapping = {
        "msAnimation" : "MSAnimationStart",
        "WebkitAnimation" : "webkitAnimationStart",
        "MozAnimation" : "animationstart",
        "OAnimation" : "oAnimationStart",
        "animation" : "animationstart"
      };
      return mapping[this.getName()];
    },
    /**
     * Checks for the event name of animation end.
     * @internal
     * @return {String} The name of the event.
     */
    getAnimationIteration : function(){

      var mapping = {
        "msAnimation" : "MSAnimationIteration",
        "WebkitAnimation" : "webkitAnimationIteration",
        "MozAnimation" : "animationiteration",
        "OAnimation" : "oAnimationIteration",
        "animation" : "animationiteration"
      };
      return mapping[this.getName()];
    },
    /**
     * Checks for the event name of animation end.
     * @internal
     * @return {String} The name of the event.
     */
    getAnimationEnd : function(){

      var mapping = {
        "msAnimation" : "MSAnimationEnd",
        "WebkitAnimation" : "webkitAnimationEnd",
        "MozAnimation" : "animationend",
        "OAnimation" : "oAnimationEnd",
        "animation" : "animationend"
      };
      return mapping[this.getName()];
    },
    /**
     * Checks what selector should be used to add keyframes to stylesheets.
     * @internal
     * @return {String|null} The name of the selector or null, if the selector
     *   is not supported.
     */
    getKeyFrames : function(){

      var prefixes = qx.bom.Style.VENDOR_PREFIXES;
      var keyFrames = [];
      for(var i = 0;i < prefixes.length;i++){

        var key = "@" + qx.bom.Style.getCssName(prefixes[i]) + "-keyframes";
        keyFrames.push(key);
      };
      keyFrames.unshift("@keyframes");
      var sheet = qx.bom.Stylesheet.createElement();
      for(var i = 0;i < keyFrames.length;i++){

        try{

          qx.bom.Stylesheet.addRule(sheet, keyFrames[i] + " name", "");
          return keyFrames[i];
        } catch(e) {
        };
      };
      return null;
    },
    /**
     * Checks for the requestAnimationFrame method and return the prefixed name.
     * @internal
     * @return {String|null} A string the method name or null, if the method
     *   is not supported.
     */
    getRequestAnimationFrame : function(){

      var choices = ["requestAnimationFrame", "msRequestAnimationFrame", "webkitRequestAnimationFrame", "mozRequestAnimationFrame", "oRequestAnimationFrame"];
      for(var i = 0;i < choices.length;i++){

        if(window[choices[i]] != undefined){

          return choices[i];
        };
      };
      return null;
    }
  },
  defer : function(statics){

    qx.core.Environment.add("css.animation", statics.getSupport);
    qx.core.Environment.add("css.animation.requestframe", statics.getRequestAnimationFrame);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * This class is responsible for applying CSS3 animations to plain DOM elements.
 *
 * The implementation is mostly a cross-browser wrapper for applying the
 * animations, including transforms. If the browser does not support
 * CSS animations, but you have set a keep frame, the keep frame will be applied
 * immediately, thus making the animations optional.
 *
 * The API aligns closely to the spec wherever possible.
 *
 * http://www.w3.org/TR/css3-animations/
 *
 * {@link qx.bom.element.Animation} is the class, which takes care of the
 * feature detection for CSS animations and decides which implementation
 * (CSS or JavaScript) should be used. Most likely, this implementation should
 * be the one to use.
 */
qx.Bootstrap.define("qx.bom.element.AnimationCss", {
  statics : {
    // initialization
    __sheet : null,
    __rulePrefix : "Anni",
    __id : 0,
    /** Static map of rules */
    __rules : {
    },
    /** The used keys for transforms. */
    __transitionKeys : {
      "scale" : true,
      "rotate" : true,
      "skew" : true,
      "translate" : true
    },
    /** Map of cross browser CSS keys. */
    __cssAnimationKeys : qx.core.Environment.get("css.animation"),
    /**
     * This is the main function to start the animation in reverse mode.
     * For further details, take a look at the documentation of the wrapper
     * {@link qx.bom.element.Animation}.
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    animateReverse : function(el, desc, duration){

      return this._animate(el, desc, duration, true);
    },
    /**
     * This is the main function to start the animation. For further details,
     * take a look at the documentation of the wrapper
     * {@link qx.bom.element.Animation}.
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    animate : function(el, desc, duration){

      return this._animate(el, desc, duration, false);
    },
    /**
     * Internal method to start an animation either reverse or not.
     * {@link qx.bom.element.Animation}.
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @param reverse {Boolean} <code>true</code>, if the animation should be
     *   reversed.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    _animate : function(el, desc, duration, reverse){

      this.__normalizeDesc(desc);
      {
      };
      // reverse the keep property if the animation is reverse as well
      var keep = desc.keep;
      if(keep != null && (reverse || (desc.alternate && desc.repeat % 2 == 0))){

        keep = 100 - keep;
      };
      if(!this.__sheet){

        this.__sheet = qx.bom.Stylesheet.createElement();
      };
      var keyFrames = desc.keyFrames;
      if(duration == undefined){

        duration = desc.duration;
      };
      // if animations are supported
      if(this.__cssAnimationKeys != null){

        var name = this.__addKeyFrames(keyFrames, reverse);
        var style = name + " " + duration + "ms " + desc.repeat + " " + desc.timing + " " + (desc.delay ? desc.delay + "ms " : "") + (desc.alternate ? "alternate" : "");
        qx.bom.Event.addNativeListener(el, this.__cssAnimationKeys["start-event"], this.__onAnimationStart);
        qx.bom.Event.addNativeListener(el, this.__cssAnimationKeys["iteration-event"], this.__onAnimationIteration);
        qx.bom.Event.addNativeListener(el, this.__cssAnimationKeys["end-event"], this.__onAnimationEnd);
        {
        };
        el.style[qx.lang.String.camelCase(this.__cssAnimationKeys["name"])] = style;
        // use the fill mode property if available and suitable
        if(keep && keep == 100 && this.__cssAnimationKeys["fill-mode"]){

          el.style[this.__cssAnimationKeys["fill-mode"]] = "forwards";
        };
      };
      var animation = new qx.bom.element.AnimationHandle();
      animation.desc = desc;
      animation.el = el;
      animation.keep = keep;
      el.$$animation = animation;
      // additional transform keys
      if(desc.origin != null){

        qx.bom.element.Transform.setOrigin(el, desc.origin);
      };
      // fallback for browsers not supporting animations
      if(this.__cssAnimationKeys == null){

        window.setTimeout(function(){

          qx.bom.element.AnimationCss.__onAnimationEnd({
            target : el
          });
        }, 0);
      };
      return animation;
    },
    /**
     * Handler for the animation start.
     * @param e {Event} The native event from the browser.
     */
    __onAnimationStart : function(e){

      e.target.$$animation.emit("start", e.target);
    },
    /**
     * Handler for the animation iteration.
     * @param e {Event} The native event from the browser.
     */
    __onAnimationIteration : function(e){

      // It could happen that an animation end event is fired before an
      // animation iteration appears [BUG #6928]
      if(e.target != null && e.target.$$animation != null){

        e.target.$$animation.emit("iteration", e.target);
      };
    },
    /**
     * Handler for the animation end.
     * @param e {Event} The native event from the browser.
     */
    __onAnimationEnd : function(e){

      var el = e.target;
      var animation = el.$$animation;
      // ignore events when already cleaned up
      if(!animation){

        return;
      };
      var desc = animation.desc;
      if(qx.bom.element.AnimationCss.__cssAnimationKeys != null){

        // reset the styling
        var key = qx.lang.String.camelCase(qx.bom.element.AnimationCss.__cssAnimationKeys["name"]);
        el.style[key] = "";
        qx.bom.Event.removeNativeListener(el, qx.bom.element.AnimationCss.__cssAnimationKeys["name"], qx.bom.element.AnimationCss.__onAnimationEnd);
      };
      if(desc.origin != null){

        qx.bom.element.Transform.setOrigin(el, "");
      };
      qx.bom.element.AnimationCss.__keepFrame(el, desc.keyFrames[animation.keep]);
      el.$$animation = null;
      animation.el = null;
      animation.ended = true;
      animation.emit("end", el);
    },
    /**
     * Helper method which takes an element and a key frame description and
     * applies the properties defined in the given frame to the element. This
     * method is used to keep the state of the animation.
     * @param el {Element} The element to apply the frame to.
     * @param endFrame {Map} The description of the end frame, which is basically
     *   a map containing CSS properties and values including transforms.
     */
    __keepFrame : function(el, endFrame){

      // keep the element at this animation step
      var transforms;
      for(var style in endFrame){

        if(style in qx.bom.element.AnimationCss.__transitionKeys){

          if(!transforms){

            transforms = {
            };
          };
          transforms[style] = endFrame[style];
        } else {

          el.style[qx.lang.String.camelCase(style)] = endFrame[style];
        };
      };
      // transform keeping
      if(transforms){

        qx.bom.element.Transform.transform(el, transforms);
      };
    },
    /**
     * Preprocessing of the description to make sure every necessary key is
     * set to its default.
     * @param desc {Map} The description of the animation.
     */
    __normalizeDesc : function(desc){

      if(!desc.hasOwnProperty("alternate")){

        desc.alternate = false;
      };
      if(!desc.hasOwnProperty("keep")){

        desc.keep = null;
      };
      if(!desc.hasOwnProperty("repeat")){

        desc.repeat = 1;
      };
      if(!desc.hasOwnProperty("timing")){

        desc.timing = "linear";
      };
      if(!desc.hasOwnProperty("origin")){

        desc.origin = null;
      };
    },
    /**
     * Debugging helper to validate the description.
     * @signature function(desc)
     * @param desc {Map} The description of the animation.
     */
    __validateDesc : null,
    /**
     * Helper to add the given frames to an internal CSS stylesheet. It parses
     * the description and adds the key frames to the sheet.
     * @param frames {Map} A map of key frames that describe the animation.
     * @param reverse {Boolean} <code>true</code>, if the key frames should
     *   be added in reverse order.
     * @return {String} The generated name of the keyframes rule.
     */
    __addKeyFrames : function(frames, reverse){

      var rule = "";
      // for each key frame
      for(var position in frames){

        rule += (reverse ? -(position - 100) : position) + "% {";
        var frame = frames[position];
        var transforms;
        // each style
        for(var style in frame){

          if(style in this.__transitionKeys){

            if(!transforms){

              transforms = {
              };
            };
            transforms[style] = frame[style];
          } else {

            var propName = qx.bom.Style.getPropertyName(style);
            var prefixed = (propName !== null) ? qx.bom.Style.getCssName(propName) : "";
            rule += (prefixed || style) + ":" + frame[style] + ";";
          };
        };
        // transform handling
        if(transforms){

          rule += qx.bom.element.Transform.getCss(transforms);
        };
        rule += "} ";
      };
      // cached shorthand
      if(this.__rules[rule]){

        return this.__rules[rule];
      };
      var name = this.__rulePrefix + this.__id++;
      var selector = this.__cssAnimationKeys["keyframes"] + " " + name;
      qx.bom.Stylesheet.addRule(this.__sheet, selector, rule);
      this.__rules[rule] = name;
      return name;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This is a simple handle, which will be returned when an animation is
 * started using the {@link qx.bom.element.Animation#animate} method. It
 * basically controls the animation.
 *
 * @ignore(qx.bom.element.AnimationJs)
 */
qx.Bootstrap.define("qx.bom.element.AnimationHandle", {
  extend : qx.event.Emitter,
  construct : function(){

    var css = qx.core.Environment.get("css.animation");
    this.__playState = css && css["play-state"];
    this.__playing = true;
  },
  events : {
    /** Fired when the animation started via {@link qx.bom.element.Animation}. */
    "start" : "Element",
    /**
     * Fired when the animation started via {@link qx.bom.element.Animation} has
     * ended.
     */
    "end" : "Element",
    /** Fired on every iteration of the animation. */
    "iteration" : "Element"
  },
  members : {
    __playState : null,
    __playing : false,
    __ended : false,
    /**
     * Accessor of the playing state.
     * @return {Boolean} <code>true</code>, if the animations is playing.
     */
    isPlaying : function(){

      return this.__playing;
    },
    /**
     * Accessor of the ended state.
     * @return {Boolean} <code>true</code>, if the animations has ended.
     */
    isEnded : function(){

      return this.__ended;
    },
    /**
     * Accessor of the paused state.
     * @return {Boolean} <code>true</code>, if the animations is paused.
     */
    isPaused : function(){

      return this.el.style[this.__playState] == "paused";
    },
    /**
     * Pauses the animation, if running. If not running, it will be ignored.
     */
    pause : function(){

      if(this.el){

        this.el.style[this.__playState] = "paused";
        this.el.$$animation.__playing = false;
        // in case the animation is based on JS
        if(this.animationId && qx.bom.element.AnimationJs){

          qx.bom.element.AnimationJs.pause(this);
        };
      };
    },
    /**
     * Resumes an animation. This does not start the animation once it has ended.
     * In this case you need to start a new Animation.
     */
    play : function(){

      if(this.el){

        this.el.style[this.__playState] = "running";
        this.el.$$animation.__playing = true;
        // in case the animation is based on JS
        if(this.i != undefined && qx.bom.element.AnimationJs){

          qx.bom.element.AnimationJs.play(this);
        };
      };
    },
    /**
     * Stops the animation if running.
     */
    stop : function(){

      if(this.el && qx.core.Environment.get("css.animation") && !this.jsAnimation){

        this.el.style[this.__playState] = "";
        this.el.style[qx.core.Environment.get("css.animation").name] = "";
        this.el.$$animation.__playing = false;
        this.el.$$animation.__ended = true;
      } else if(this.jsAnimation){

        this.stopped = true;
        qx.bom.element.AnimationJs.stop(this);
      };
    }
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
 * This class offers the same API as the CSS3 animation layer in
 * {@link qx.bom.element.AnimationCss} but uses JavaScript to fake the behavior.
 *
 * {@link qx.bom.element.Animation} is the class, which takes care of the
 * feature detection for CSS animations and decides which implementation
 * (CSS or JavaScript) should be used. Most likely, this implementation should
 * be the one to use.
 *
 * @ignore(qx.bom.element.Style.*)
 * @use(qx.bom.element.AnimationJs#play)
 */
qx.Bootstrap.define("qx.bom.element.AnimationJs", {
  statics : {
    /**
     * The maximal time a frame should take.
     */
    __maxStepTime : 30,
    /**
     * The supported CSS units.
     */
    __units : ["%", "in", "cm", "mm", "em", "ex", "pt", "pc", "px"],
    /** The used keys for transforms. */
    __transitionKeys : {
      "scale" : true,
      "rotate" : true,
      "skew" : true,
      "translate" : true
    },
    /**
     * This is the main function to start the animation. For further details,
     * take a look at the documentation of the wrapper
     * {@link qx.bom.element.Animation}.
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    animate : function(el, desc, duration){

      return this._animate(el, desc, duration, false);
    },
    /**
     * This is the main function to start the animation in reversed mode.
     * For further details, take a look at the documentation of the wrapper
     * {@link qx.bom.element.Animation}.
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    animateReverse : function(el, desc, duration){

      return this._animate(el, desc, duration, true);
    },
    /**
     * Helper to start the animation, either in reversed order or not.
     *
     * @param el {Element} The element to animate.
     * @param desc {Map} Animation description.
     * @param duration {Integer?} The duration of the animation which will
     *   override the duration given in the description.
     * @param reverse {Boolean} <code>true</code>, if the animation should be
     *   reversed.
     * @return {qx.bom.element.AnimationHandle} The handle.
     */
    _animate : function(el, desc, duration, reverse){

      // stop if an animation is already running
      if(el.$$animation){

        return el.$$animation;
      };
      desc = qx.lang.Object.clone(desc, true);
      if(duration == undefined){

        duration = desc.duration;
      };
      var keyFrames = desc.keyFrames;
      var keys = this.__getOrderedKeys(keyFrames);
      var stepTime = this.__getStepTime(duration, keys);
      var steps = parseInt(duration / stepTime, 10);
      this.__normalizeKeyFrames(keyFrames, el);
      var delta = this.__calculateDelta(steps, stepTime, keys, keyFrames, duration, desc.timing);
      var handle = new qx.bom.element.AnimationHandle();
      handle.jsAnimation = true;
      if(reverse){

        delta.reverse();
        handle.reverse = true;
      };
      handle.desc = desc;
      handle.el = el;
      handle.delta = delta;
      handle.stepTime = stepTime;
      handle.steps = steps;
      el.$$animation = handle;
      handle.i = 0;
      handle.initValues = {
      };
      handle.repeatSteps = this.__applyRepeat(steps, desc.repeat);
      var delay = desc.delay || 0;
      var self = this;
      handle.delayId = window.setTimeout(function(){

        handle.delayId = null;
        self.play(handle);
      }, delay);
      return handle;
    },
    /**
     * Try to normalize the keyFrames by adding the default / set values of the
     * element.
     * @param keyFrames {Map} The map of key frames.
     * @param el {Element} The element to animate.
     */
    __normalizeKeyFrames : function(keyFrames, el){

      // collect all possible keys and its units
      var units = {
      };
      for(var percent in keyFrames){

        for(var name in keyFrames[percent]){

          // prefixed key calculation
          var prefixed = qx.bom.Style.getPropertyName(name);
          if(prefixed && prefixed != name){

            var prefixedName = qx.bom.Style.getCssName(prefixed);
            keyFrames[percent][prefixedName] = keyFrames[percent][name];
            delete keyFrames[percent][name];
            name = prefixedName;
          };
          // check for the available units
          if(units[name] == undefined){

            var item = keyFrames[percent][name];
            if(typeof item == "string"){

              units[name] = this.__getUnit(item);
            } else {

              units[name] = "";
            };
          };
        };
      };
      // add all missing keys
      for(var percent in keyFrames){

        var frame = keyFrames[percent];
        for(var name in units){

          if(frame[name] == undefined){

            if(name in el.style){

              // get the computed style if possible
              if(window.getComputedStyle){

                frame[name] = getComputedStyle(el, null)[name];
              } else {

                frame[name] = el.style[name];
              };
            } else {

              frame[name] = el[name];
            };
            // if its a unit we know, set 0 as fallback
            if(frame[name] === "" && this.__units.indexOf(units[name]) != -1){

              frame[name] = "0" + units[name];
            };
          };
        };
      };
    },
    /**
     * Checks for transform keys and returns a cloned frame
     * with the right transform style set.
     * @param frame {Map} A single key frame of the description.
     * @return {Map} A modified clone of the given frame.
     */
    __normalizeKeyFrameTransforms : function(frame){

      frame = qx.lang.Object.clone(frame);
      var transforms;
      for(var name in frame){

        if(name in this.__transitionKeys){

          if(!transforms){

            transforms = {
            };
          };
          transforms[name] = frame[name];
          delete frame[name];
        };
      };
      if(transforms){

        var transformStyle = qx.bom.element.Transform.getCss(transforms).split(":");
        if(transformStyle.length > 1){

          frame[transformStyle[0]] = transformStyle[1].replace(";", "");
        };
      };
      return frame;
    },
    /**
     * Precalculation of the delta which will be applied during the animation.
     * The whole deltas will be calculated prior to the animation and stored
     * in a single array. This method takes care of that calculation.
     *
     * @param steps {Integer} The amount of steps to take to the end of the
     *   animation.
     * @param stepTime {Integer} The amount of milliseconds each step takes.
     * @param keys {Array} Ordered list of keys in the key frames map.
     * @param keyFrames {Map} The map of key frames.
     * @param duration {Integer} Time in milliseconds the animation should take.
     * @param timing {String} The given timing function.
     * @return {Array} An array containing the animation deltas.
     */
    __calculateDelta : function(steps, stepTime, keys, keyFrames, duration, timing){

      var delta = new Array(steps);
      var keyIndex = 1;
      delta[0] = this.__normalizeKeyFrameTransforms(keyFrames[0]);
      var last = keyFrames[0];
      var next = keyFrames[keys[keyIndex]];
      var stepsToNext = Math.floor(keys[keyIndex] / (stepTime / duration * 100));
      var calculationIndex = 1;
      // is used as counter for the timing calculation
      // for every step
      for(var i = 1;i < delta.length;i++){

        // switch key frames if we crossed a percent border
        if(i * stepTime / duration * 100 > keys[keyIndex]){

          last = next;
          keyIndex++;
          next = keyFrames[keys[keyIndex]];
          stepsToNext = Math.floor(keys[keyIndex] / (stepTime / duration * 100)) - stepsToNext;
          calculationIndex = 1;
        };
        delta[i] = {
        };
        var transforms;
        // for every property
        for(var name in next){

          var nItem = next[name] + "";
          // transform values
          if(name in this.__transitionKeys){

            if(!transforms){

              transforms = {
              };
            };
            if(qx.Bootstrap.isArray(last[name])){

              if(!qx.Bootstrap.isArray(next[name])){

                next[name] = [next[name]];
              };
              transforms[name] = [];
              for(var j = 0;j < next[name].length;j++){

                var item = next[name][j] + "";
                var x = calculationIndex / stepsToNext;
                transforms[name][j] = this.__getNextValue(item, last[name], timing, x);
              };
            } else {

              var x = calculationIndex / stepsToNext;
              transforms[name] = this.__getNextValue(nItem, last[name], timing, x);
            };
          } else if(nItem.charAt(0) == "#"){

            // get the two values from the frames as RGB arrays
            var value0 = qx.util.ColorUtil.cssStringToRgb(last[name]);
            var value1 = qx.util.ColorUtil.cssStringToRgb(nItem);
            var stepValue = [];
            // calculate every color chanel
            for(var j = 0;j < value0.length;j++){

              var range = value0[j] - value1[j];
              var x = calculationIndex / stepsToNext;
              var timingX = qx.bom.AnimationFrame.calculateTiming(timing, x);
              stepValue[j] = parseInt(value0[j] - range * timingX, 10);
            };
            delta[i][name] = qx.util.ColorUtil.rgbToHexString(stepValue);
          } else if(!isNaN(parseFloat(nItem))){

            var x = calculationIndex / stepsToNext;
            delta[i][name] = this.__getNextValue(nItem, last[name], timing, x);
          } else {

            delta[i][name] = last[name] + "";
          };;
        };
        // save all transformations in the delta values
        if(transforms){

          var transformStyle = qx.bom.element.Transform.getCss(transforms).split(":");
          if(transformStyle.length > 1){

            delta[i][transformStyle[0]] = transformStyle[1].replace(";", "");
          };
        };
        calculationIndex++;
      };
      // make sure the last key frame is right
      delta[delta.length - 1] = this.__normalizeKeyFrameTransforms(keyFrames[100]);
      return delta;
    },
    /**
     * Ties to parse out the unit of the given value.
     *
     * @param item {String} A CSS value including its unit.
     * @return {String} The unit of the given value.
     */
    __getUnit : function(item){

      return item.substring((parseFloat(item) + "").length, item.length);
    },
    /**
     * Returns the next value based on the given arguments.
     *
     * @param nextItem {String} The CSS value of the next frame
     * @param lastItem {String} The CSS value of the last frame
     * @param timing {String} The timing used for the calculation
     * @param x {Number} The x position of the animation on the time axis
     * @return {String} The calculated value including its unit.
     */
    __getNextValue : function(nextItem, lastItem, timing, x){

      var range = parseFloat(nextItem) - parseFloat(lastItem);
      return (parseFloat(lastItem) + range * qx.bom.AnimationFrame.calculateTiming(timing, x)) + this.__getUnit(nextItem);
    },
    /**
     * Internal helper for the {@link qx.bom.element.AnimationHandle} to play
     * the animation.
     * @internal
     * @param handle {qx.bom.element.AnimationHandle} The hand which
     *   represents the animation.
     * @return {qx.bom.element.AnimationHandle} The handle for chaining.
     */
    play : function(handle){

      handle.emit("start", handle.el);
      var id = window.setInterval(function(){

        handle.repeatSteps--;
        var values = handle.delta[handle.i % handle.steps];
        // save the init values
        if(handle.i === 0){

          for(var name in values){

            if(handle.initValues[name] === undefined){

              // animate element property
              if(handle.el[name] !== undefined){

                handle.initValues[name] = handle.el[name];
              } else if(qx.bom.element.Style){

                handle.initValues[name] = qx.bom.element.Style.get(handle.el, qx.lang.String.camelCase(name));
              } else {

                handle.initValues[name] = handle.el.style[qx.lang.String.camelCase(name)];
              };
            };
          };
        };
        qx.bom.element.AnimationJs.__applyStyles(handle.el, values);
        handle.i++;
        // iteration condition
        if(handle.i % handle.steps == 0){

          handle.emit("iteration", handle.el);
          if(handle.desc.alternate){

            handle.delta.reverse();
          };
        };
        // end condition
        if(handle.repeatSteps < 0){

          qx.bom.element.AnimationJs.stop(handle);
        };
      }, handle.stepTime);
      handle.animationId = id;
      return handle;
    },
    /**
     * Internal helper for the {@link qx.bom.element.AnimationHandle} to pause
     * the animation.
     * @internal
     * @param handle {qx.bom.element.AnimationHandle} The hand which
     *   represents the animation.
     * @return {qx.bom.element.AnimationHandle} The handle for chaining.
     */
    pause : function(handle){

      // stop the interval
      window.clearInterval(handle.animationId);
      handle.animationId = null;
      return handle;
    },
    /**
     * Internal helper for the {@link qx.bom.element.AnimationHandle} to stop
     * the animation.
     * @internal
     * @param handle {qx.bom.element.AnimationHandle} The hand which
     *   represents the animation.
     * @return {qx.bom.element.AnimationHandle} The handle for chaining.
     */
    stop : function(handle){

      var desc = handle.desc;
      var el = handle.el;
      var initValues = handle.initValues;
      if(handle.animationId){

        window.clearInterval(handle.animationId);
      };
      // clear the delay if the animation has not been started
      if(handle.delayId){

        window.clearTimeout(handle.delayId);
      };
      // check if animation is already stopped
      if(el == undefined){

        return handle;
      };
      // if we should keep a frame
      var keep = desc.keep;
      if(keep != undefined && !handle.stopped){

        if(handle.reverse || (desc.alternate && desc.repeat && desc.repeat % 2 == 0)){

          keep = 100 - keep;
        };
        this.__applyStyles(el, desc.keyFrames[keep]);
      } else {

        this.__applyStyles(el, initValues);
      };
      el.$$animation = null;
      handle.el = null;
      handle.ended = true;
      handle.animationId = null;
      handle.emit("end", el);
      return handle;
    },
    /**
     * Takes care of the repeat key of the description.
     * @param steps {Integer} The number of steps one iteration would take.
     * @param repeat {Integer|String} It can be either a number how often the
     * animation should be repeated or the string 'infinite'.
     * @return {Integer} The number of steps to animate.
     */
    __applyRepeat : function(steps, repeat){

      if(repeat == undefined){

        return steps;
      };
      if(repeat == "infinite"){

        return Number.MAX_VALUE;
      };
      return steps * repeat;
    },
    /**
     * Central method to apply css styles and element properties.
     * @param el {Element} The DOM element to apply the styles.
     * @param styles {Map} A map containing styles and values.
     */
    __applyStyles : function(el, styles){

      for(var key in styles){

        // ignore undefined values (might be a bad detection)
        if(styles[key] === undefined){

          continue;
        };
        // apply element property value - only if a CSS property
        // is *not* available
        if(typeof el.style[key] === "undefined" && key in el){

          el[key] = styles[key];
          continue;
        };
        var name = qx.bom.Style.getPropertyName(key) || key;
        if(qx.bom.element.Style){

          qx.bom.element.Style.set(el, name, styles[key]);
        } else {

          el.style[name] = styles[key];
        };
      };
    },
    /**
     * Dynamic calculation of the steps time considering a max step time.
     * @param duration {Number} The duration of the animation.
     * @param keys {Array} An array containing the orderd set of key frame keys.
     * @return {Integer} The best suited step time.
     */
    __getStepTime : function(duration, keys){

      // get min difference
      var minDiff = 100;
      for(var i = 0;i < keys.length - 1;i++){

        minDiff = Math.min(minDiff, keys[i + 1] - keys[i]);
      };
      var stepTime = duration * minDiff / 100;
      while(stepTime > this.__maxStepTime){

        stepTime = stepTime / 2;
      };
      return Math.round(stepTime);
    },
    /**
     * Helper which returns the orderd keys of the key frame map.
     * @param keyFrames {Map} The map of key frames.
     * @return {Array} An orderd list of kyes.
     */
    __getOrderedKeys : function(keyFrames){

      var keys = Object.keys(keyFrames);
      for(var i = 0;i < keys.length;i++){

        keys[i] = parseInt(keys[i], 10);
      };
      keys.sort(function(a, b){

        return a - b;
      });
      return keys;
    }
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
    /** The dimensions of the transforms */
    __dimensions : ["X", "Y", "Z"],
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
     * Make sure your browser supports all transformations you apply.
     * @param el {Element} The element to apply the transformation.
     * @param transforms {Map} The map containing the transforms and value.
     */
    transform : function(el, transforms){

      var transformCss = this.__mapToCss(transforms);
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

      var transformCss = this.__mapToCss(transforms);
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
     * Internal helper which converts the given transforms map to a valid CSS
     * string.
     * @param transforms {Map} A map containing the transforms.
     * @return {String} The CSS transforms.
     */
    __mapToCss : function(transforms){

      var value = "";
      for(var func in transforms){

        var params = transforms[func];
        // if an array is given
        if(qx.Bootstrap.isArray(params)){

          for(var i = 0;i < params.length;i++){

            if(params[i] == undefined || (i == 2 && !qx.core.Environment.get("css.transform.3d"))){

              continue;
            };
            value += func + this.__dimensions[i] + "(";
            value += params[i];
            value += ") ";
          };
        } else {

          // single value case
          value += func + "(" + transforms[func] + ") ";
        };
      };
      return value;
    }
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
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Christian Hagendorn (cs)

************************************************************************ */
/**
 * Methods to convert colors between different color spaces.
 *
 * @ignore(qx.theme.*)
 * @ignore(qx.Class)
 * @ignore(qx.Class.*)
 */
qx.Bootstrap.define("qx.util.ColorUtil", {
  statics : {
    /**
     * Regular expressions for color strings
     */
    REGEXP : {
      hex3 : /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6 : /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      rgb : /^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,
      rgba : /^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/
    },
    /**
     * CSS3 system color names.
     */
    SYSTEM : {
      activeborder : true,
      activecaption : true,
      appworkspace : true,
      background : true,
      buttonface : true,
      buttonhighlight : true,
      buttonshadow : true,
      buttontext : true,
      captiontext : true,
      graytext : true,
      highlight : true,
      highlighttext : true,
      inactiveborder : true,
      inactivecaption : true,
      inactivecaptiontext : true,
      infobackground : true,
      infotext : true,
      menu : true,
      menutext : true,
      scrollbar : true,
      threeddarkshadow : true,
      threedface : true,
      threedhighlight : true,
      threedlightshadow : true,
      threedshadow : true,
      window : true,
      windowframe : true,
      windowtext : true
    },
    /**
     * Named colors, only the 16 basic colors plus the following ones:
     * transparent, grey, magenta, orange and brown
     */
    NAMED : {
      black : [0, 0, 0],
      silver : [192, 192, 192],
      gray : [128, 128, 128],
      white : [255, 255, 255],
      maroon : [128, 0, 0],
      red : [255, 0, 0],
      purple : [128, 0, 128],
      fuchsia : [255, 0, 255],
      green : [0, 128, 0],
      lime : [0, 255, 0],
      olive : [128, 128, 0],
      yellow : [255, 255, 0],
      navy : [0, 0, 128],
      blue : [0, 0, 255],
      teal : [0, 128, 128],
      aqua : [0, 255, 255],
      // Additional values
      transparent : [-1, -1, -1],
      magenta : [255, 0, 255],
      // alias for fuchsia
      orange : [255, 165, 0],
      brown : [165, 42, 42]
    },
    /**
     * Whether the incoming value is a named color.
     *
     * @param value {String} the color value to test
     * @return {Boolean} true if the color is a named color
     */
    isNamedColor : function(value){

      return this.NAMED[value] !== undefined;
    },
    /**
     * Whether the incoming value is a system color.
     *
     * @param value {String} the color value to test
     * @return {Boolean} true if the color is a system color
     */
    isSystemColor : function(value){

      return this.SYSTEM[value] !== undefined;
    },
    /**
     * Whether the color theme manager is loaded. Generally
     * part of the GUI of qooxdoo.
     *
     * @return {Boolean} <code>true</code> when color theme support is ready.
     **/
    supportsThemes : function(){

      if(qx.Class){

        return qx.Class.isDefined("qx.theme.manager.Color");
      };
      return false;
    },
    /**
     * Whether the incoming value is a themed color.
     *
     * @param value {String} the color value to test
     * @return {Boolean} true if the color is a themed color
     */
    isThemedColor : function(value){

      if(!this.supportsThemes()){

        return false;
      };
      if(qx.theme && qx.theme.manager && qx.theme.manager.Color){

        return qx.theme.manager.Color.getInstance().isDynamic(value);
      };
      return false;
    },
    /**
     * Try to convert an incoming string to an RGB array.
     * Supports themed, named and system colors, but also RGB strings,
     * hex3 and hex6 values.
     *
     * @param str {String} any string
     * @return {Array} returns an array of red, green, blue on a successful transformation
     * @throws {Error} if the string could not be parsed
     */
    stringToRgb : function(str){

      if(this.supportsThemes() && this.isThemedColor(str)){

        str = qx.theme.manager.Color.getInstance().resolveDynamic(str);
      };
      if(this.isNamedColor(str)){

        return this.NAMED[str].concat();
      } else if(this.isSystemColor(str)){

        throw new Error("Could not convert system colors to RGB: " + str);
      } else if(this.isRgbaString(str)){

        return this.__rgbaStringToRgb(str);
      } else if(this.isRgbString(str)){

        return this.__rgbStringToRgb();
      } else if(this.isHex3String(str)){

        return this.__hex3StringToRgb();
      } else if(this.isHex6String(str)){

        return this.__hex6StringToRgb();
      };;;;;
      throw new Error("Could not parse color: " + str);
    },
    /**
     * Try to convert an incoming string to an RGB array.
     * Support named colors, RGB strings, hex3 and hex6 values.
     *
     * @param str {String} any string
     * @return {Array} returns an array of red, green, blue on a successful transformation
     * @throws {Error} if the string could not be parsed
     */
    cssStringToRgb : function(str){

      if(this.isNamedColor(str)){

        return this.NAMED[str];
      } else if(this.isSystemColor(str)){

        throw new Error("Could not convert system colors to RGB: " + str);
      } else if(this.isRgbString(str)){

        return this.__rgbStringToRgb();
      } else if(this.isRgbaString(str)){

        return this.__rgbaStringToRgb();
      } else if(this.isHex3String(str)){

        return this.__hex3StringToRgb();
      } else if(this.isHex6String(str)){

        return this.__hex6StringToRgb();
      };;;;;
      throw new Error("Could not parse color: " + str);
    },
    /**
     * Try to convert an incoming string to an RGB string, which can be used
     * for all color properties.
     * Supports themed, named and system colors, but also RGB strings,
     * hex3 and hex6 values.
     *
     * @param str {String} any string
     * @return {String} a RGB string
     * @throws {Error} if the string could not be parsed
     */
    stringToRgbString : function(str){

      return this.rgbToRgbString(this.stringToRgb(str));
    },
    /**
     * Converts a RGB array to an RGB string
     *
     * @param rgb {Array} an array with red, green and blue values and optionally
     * an alpha value
     * @return {String} an RGB string
     */
    rgbToRgbString : function(rgb){

      return "rgb" + (rgb[3] ? "a" : "") + "(" + rgb.join(",") + ")";
    },
    /**
     * Converts a RGB array to an hex6 string
     *
     * @param rgb {Array} an array with red, green and blue
     * @return {String} a hex6 string (#xxxxxx)
     */
    rgbToHexString : function(rgb){

      return ("#" + qx.lang.String.pad(rgb[0].toString(16).toUpperCase(), 2) + qx.lang.String.pad(rgb[1].toString(16).toUpperCase(), 2) + qx.lang.String.pad(rgb[2].toString(16).toUpperCase(), 2));
    },
    /**
     * Detects if a string is a valid qooxdoo color
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid qooxdoo color
     */
    isValidPropertyValue : function(str){

      return (this.isThemedColor(str) || this.isNamedColor(str) || this.isHex3String(str) || this.isHex6String(str) || this.isRgbString(str) || this.isRgbaString(str));
    },
    /**
     * Detects if a string is a valid CSS color string
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid CSS color string
     */
    isCssString : function(str){

      return (this.isSystemColor(str) || this.isNamedColor(str) || this.isHex3String(str) || this.isHex6String(str) || this.isRgbString(str) || this.isRgbaString(str));
    },
    /**
     * Detects if a string is a valid hex3 string
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid hex3 string
     */
    isHex3String : function(str){

      return this.REGEXP.hex3.test(str);
    },
    /**
     * Detects if a string is a valid hex6 string
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid hex6 string
     */
    isHex6String : function(str){

      return this.REGEXP.hex6.test(str);
    },
    /**
     * Detects if a string is a valid RGB string
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid RGB string
     */
    isRgbString : function(str){

      return this.REGEXP.rgb.test(str);
    },
    /**
     * Detects if a string is a valid RGBA string
     *
     * @param str {String} any string
     * @return {Boolean} true when the incoming value is a valid RGBA string
     */
    isRgbaString : function(str){

      return this.REGEXP.rgba.test(str);
    },
    /**
     * Converts a regexp object match of a rgb string to an RGB array.
     *
     * @return {Array} an array with red, green, blue
     */
    __rgbStringToRgb : function(){

      var red = parseInt(RegExp.$1, 10);
      var green = parseInt(RegExp.$2, 10);
      var blue = parseInt(RegExp.$3, 10);
      return [red, green, blue];
    },
    /**
     * Converts a regexp object match of a rgba string to an RGB array.
     *
     * @return {Array} an array with red, green, blue
     */
    __rgbaStringToRgb : function(){

      var red = parseInt(RegExp.$1, 10);
      var green = parseInt(RegExp.$2, 10);
      var blue = parseInt(RegExp.$3, 10);
      var alpha = parseInt(RegExp.$4, 10);
      if(red === 0 && green === 0 & blue === 0 && alpha === 0){

        return [-1, -1, -1];
      };
      return [red, green, blue];
    },
    /**
     * Converts a regexp object match of a hex3 string to an RGB array.
     *
     * @return {Array} an array with red, green, blue
     */
    __hex3StringToRgb : function(){

      var red = parseInt(RegExp.$1, 16) * 17;
      var green = parseInt(RegExp.$2, 16) * 17;
      var blue = parseInt(RegExp.$3, 16) * 17;
      return [red, green, blue];
    },
    /**
     * Converts a regexp object match of a hex6 string to an RGB array.
     *
     * @return {Array} an array with red, green, blue
     */
    __hex6StringToRgb : function(){

      var red = (parseInt(RegExp.$1, 16) * 16) + parseInt(RegExp.$2, 16);
      var green = (parseInt(RegExp.$3, 16) * 16) + parseInt(RegExp.$4, 16);
      var blue = (parseInt(RegExp.$5, 16) * 16) + parseInt(RegExp.$6, 16);
      return [red, green, blue];
    },
    /**
     * Converts a hex3 string to an RGB array
     *
     * @param value {String} a hex3 (#xxx) string
     * @return {Array} an array with red, green, blue
     */
    hex3StringToRgb : function(value){

      if(this.isHex3String(value)){

        return this.__hex3StringToRgb(value);
      };
      throw new Error("Invalid hex3 value: " + value);
    },
    /**
     * Converts a hex3 (#xxx) string to a hex6 (#xxxxxx) string.
     *
     * @param value {String} a hex3 (#xxx) string
     * @return {String} The hex6 (#xxxxxx) string or the passed value when the
     *   passed value is not an hex3 (#xxx) value.
     */
    hex3StringToHex6String : function(value){

      if(this.isHex3String(value)){

        return this.rgbToHexString(this.hex3StringToRgb(value));
      };
      return value;
    },
    /**
     * Converts a hex6 string to an RGB array
     *
     * @param value {String} a hex6 (#xxxxxx) string
     * @return {Array} an array with red, green, blue
     */
    hex6StringToRgb : function(value){

      if(this.isHex6String(value)){

        return this.__hex6StringToRgb(value);
      };
      throw new Error("Invalid hex6 value: " + value);
    },
    /**
     * Converts a hex string to an RGB array
     *
     * @param value {String} a hex3 (#xxx) or hex6 (#xxxxxx) string
     * @return {Array} an array with red, green, blue
     */
    hexStringToRgb : function(value){

      if(this.isHex3String(value)){

        return this.__hex3StringToRgb(value);
      };
      if(this.isHex6String(value)){

        return this.__hex6StringToRgb(value);
      };
      throw new Error("Invalid hex value: " + value);
    },
    /**
     * Convert RGB colors to HSB
     *
     * @param rgb {Number[]} red, blue and green as array
     * @return {Array} an array with hue, saturation and brightness
     */
    rgbToHsb : function(rgb){

      var hue,saturation,brightness;
      var red = rgb[0];
      var green = rgb[1];
      var blue = rgb[2];
      var cmax = (red > green) ? red : green;
      if(blue > cmax){

        cmax = blue;
      };
      var cmin = (red < green) ? red : green;
      if(blue < cmin){

        cmin = blue;
      };
      brightness = cmax / 255.0;
      if(cmax != 0){

        saturation = (cmax - cmin) / cmax;
      } else {

        saturation = 0;
      };
      if(saturation == 0){

        hue = 0;
      } else {

        var redc = (cmax - red) / (cmax - cmin);
        var greenc = (cmax - green) / (cmax - cmin);
        var bluec = (cmax - blue) / (cmax - cmin);
        if(red == cmax){

          hue = bluec - greenc;
        } else if(green == cmax){

          hue = 2.0 + redc - bluec;
        } else {

          hue = 4.0 + greenc - redc;
        };
        hue = hue / 6.0;
        if(hue < 0){

          hue = hue + 1.0;
        };
      };
      return [Math.round(hue * 360), Math.round(saturation * 100), Math.round(brightness * 100)];
    },
    /**
     * Convert HSB colors to RGB
     *
     * @param hsb {Number[]} an array with hue, saturation and brightness
     * @return {Integer[]} an array with red, green, blue
     */
    hsbToRgb : function(hsb){

      var i,f,p,r,t;
      var hue = hsb[0] / 360;
      var saturation = hsb[1] / 100;
      var brightness = hsb[2] / 100;
      if(hue >= 1.0){

        hue %= 1.0;
      };
      if(saturation > 1.0){

        saturation = 1.0;
      };
      if(brightness > 1.0){

        brightness = 1.0;
      };
      var tov = Math.floor(255 * brightness);
      var rgb = {
      };
      if(saturation == 0.0){

        rgb.red = rgb.green = rgb.blue = tov;
      } else {

        hue *= 6.0;
        i = Math.floor(hue);
        f = hue - i;
        p = Math.floor(tov * (1.0 - saturation));
        r = Math.floor(tov * (1.0 - (saturation * f)));
        t = Math.floor(tov * (1.0 - (saturation * (1.0 - f))));
        switch(i){case 0:
        rgb.red = tov;
        rgb.green = t;
        rgb.blue = p;
        break;case 1:
        rgb.red = r;
        rgb.green = tov;
        rgb.blue = p;
        break;case 2:
        rgb.red = p;
        rgb.green = tov;
        rgb.blue = t;
        break;case 3:
        rgb.red = p;
        rgb.green = r;
        rgb.blue = tov;
        break;case 4:
        rgb.red = t;
        rgb.green = p;
        rgb.blue = tov;
        break;case 5:
        rgb.red = tov;
        rgb.green = p;
        rgb.blue = r;
        break;};
      };
      return [rgb.red, rgb.green, rgb.blue];
    },
    /**
     * Creates a random color.
     *
     * @return {String} a valid qooxdoo/CSS rgb color string.
     */
    randomColor : function(){

      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);
      return this.rgbToRgbString([r, g, b]);
    }
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
 * This is a cross browser wrapper for requestAnimationFrame. For further
 * information about the feature, take a look at spec:
 * http://www.w3.org/TR/animation-timing/
 *
 * This class offers two ways of using this feature. First, the plain
 * API the spec describes.
 *
 * Here is a sample usage:
 * <pre class='javascript'>var start = +(new Date());
 * var clb = function(time) {
 *   if (time >= start + duration) {
 *     // ... do some last tasks
 *   } else {
 *     var timePassed = time - start;
 *     // ... calculate the current step and apply it
 *     qx.bom.AnimationFrame.request(clb, this);
 *   }
 * };
 * qx.bom.AnimationFrame.request(clb, this);
 * </pre>
 *
 * Another way of using it is to use it as an instance emitting events.
 *
 * Here is a sample usage of that API:
 * <pre class='javascript'>var frame = new qx.bom.AnimationFrame();
 * frame.on("end", function() {
 *   // ... do some last tasks
 * }, this);
 * frame.on("frame", function(timePassed) {
 *   // ... calculate the current step and apply it
 * }, this);
 * frame.startSequence(duration);
 * </pre>
 *
 * @require(qx.lang.normalize.Date)
 */
qx.Bootstrap.define("qx.bom.AnimationFrame", {
  extend : qx.event.Emitter,
  events : {
    /** Fired as soon as the animation has ended. */
    "end" : undefined,
    /**
     * Fired on every frame having the passed time as value
     * (might be a float for higher precision).
     */
    "frame" : "Number"
  },
  members : {
    __canceled : false,
    /**
     * Method used to start a series of animation frames. The series will end as
     * soon as the given duration is over.
     *
     * @param duration {Number} The duration the sequence should take.
     */
    startSequence : function(duration){

      this.__canceled = false;
      var start = +(new Date());
      var clb = function(time){

        if(this.__canceled){

          this.id = null;
          return;
        };
        // final call
        if(time >= start + duration){

          this.emit("end");
          this.id = null;
        } else {

          var timePassed = Math.max(time - start, 0);
          this.emit("frame", timePassed);
          this.id = qx.bom.AnimationFrame.request(clb, this);
        };
      };
      this.id = qx.bom.AnimationFrame.request(clb, this);
    },
    /**
     * Cancels a started sequence of frames. It will do nothing if no
     * sequence is running.
     */
    cancelSequence : function(){

      this.__canceled = true;
    }
  },
  statics : {
    /**
     * The default time in ms the timeout fallback implementation uses.
     */
    TIMEOUT : 30,
    /**
     * Calculation of the predefined timing functions. Approximation of the real
     * bezier curves has been used for easier calculation. This is good and close
     * enough for the predefined functions like <code>ease</code> or
     * <code>linear</code>.
     *
     * @param func {String} The defined timing function. One of the following values:
     *   <code>"ease-in"</code>, <code>"ease-out"</code>, <code>"linear"</code>,
     *   <code>"ease-in-out"</code>, <code>"ease"</code>.
     * @param x {Integer} The percent value of the function.
     * @return {Integer} The calculated value
     */
    calculateTiming : function(func, x){

      if(func == "ease-in"){

        var a = [3.1223e-7, 0.0757, 1.2646, -0.167, -0.4387, 0.2654];
      } else if(func == "ease-out"){

        var a = [-7.0198e-8, 1.652, -0.551, -0.0458, 0.1255, -0.1807];
      } else if(func == "linear"){

        return x;
      } else if(func == "ease-in-out"){

        var a = [2.482e-7, -0.2289, 3.3466, -1.0857, -1.7354, 0.7034];
      } else {

        // default is 'ease'
        var a = [-0.0021, 0.2472, 9.8054, -21.6869, 17.7611, -5.1226];
      };;;
      // A 6th grade polynomial has been used as approximation of the original
      // bezier curves  described in the transition spec
      // http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
      // (the same is used for animations as well)
      var y = 0;
      for(var i = 0;i < a.length;i++){

        y += a[i] * Math.pow(x, i);
      };
      return y;
    },
    /**
     * Request for an animation frame. If the native <code>requestAnimationFrame</code>
     * method is supported, it will be used. Otherwise, we use timeouts with a
     * 30ms delay. The HighResolutionTime will be used if supported but the time given
     * to the callback will still be a timestamp starting at 1 January 1970 00:00:00 UTC.
     *
     * @param callback {Function} The callback function which will get the current
     *   time as argument (which could be a float for higher precision).
     * @param context {var} The context of the callback.
     * @return {Number} The id of the request.
     */
    request : function(callback, context){

      var req = qx.core.Environment.get("css.animation.requestframe");
      var clb = function(time){

        // check for high resolution time
        if(time < 1e10){

          time = this.__start + time;
        };
        time = time || +(new Date());
        callback.call(context, time);
      };
      if(req){

        return window[req](clb);
      } else {

        // make sure to use an indirection because setTimeout passes a
        // number as first argument as well
        return window.setTimeout(function(){

          clb();
        }, qx.bom.AnimationFrame.TIMEOUT);
      };
    }
  },
  /**
   * @ignore(performance.timing.*)
   */
  defer : function(statics){

    // check and use the high resolution start time if available
    statics.__start = window.performance && performance.timing && performance.timing.navigationStart;
    // if not, simply use the current time
    if(!statics.__start){

      statics.__start = Date.now();
    };
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

   * Mustache.js version 0.7.3

     Code:
       https://github.com/janl/mustache.js

     Copyright:
       (c) 2009 Chris Wanstrath (Ruby)
       (c) 2010 Jan Lehnardt (JavaScript)

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

   ----------------------------------------------------------------------

   Copyright (c) 2009 Chris Wanstrath (Ruby)
   Copyright (c) 2010 Jan Lehnardt (JavaScript)

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
    function Context(view, parent){

      this.view = view == null ? {
      } : view;
      this.parent = parent;
      this._cache = {
        '.' : this.view
      };
    };
    Context.make = function(view){

      return (view instanceof Context) ? view : new Context(view);
    };
    Context.prototype.push = function(view){

      return new Context(view, this);
    };
    Context.prototype.lookup = function(name){

      var value;
      if(name in this._cache){

        value = this._cache[name];
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
        this._cache[name] = value;
      };
      if(isFunction(value)){

        value = value.call(this.view);
      };
      return value;
    };
    function Writer(){

      this.clearCache();
    };
    Writer.prototype.clearCache = function(){

      this._cache = {
      };
      this._partialCache = {
      };
    };
    Writer.prototype.compile = function(template, tags){

      var fn = this._cache[template];
      if(!fn){

        var tokens = mustache.parse(template, tags);
        fn = this._cache[template] = this.compileTokens(tokens, template);
      };
      return fn;
    };
    Writer.prototype.compilePartial = function(name, template, tags){

      var fn = this.compile(template, tags);
      this._partialCache[name] = fn;
      return fn;
    };
    Writer.prototype.getPartial = function(name){

      if(!(name in this._partialCache) && this._loadPartial){

        this.compilePartial(name, this._loadPartial(name));
      };
      return this._partialCache[name];
    };
    Writer.prototype.compileTokens = function(tokens, template){

      var self = this;
      return function(view, partials){

        if(partials){

          if(isFunction(partials)){

            self._loadPartial = partials;
          } else {

            for(var name in partials){

              self.compilePartial(name, partials[name]);
            };
          };
        };
        return renderTokens(tokens, self, Context.make(view), template);
      };
    };
    Writer.prototype.render = function(template, view, partials){

      return this.compile(template)(view, partials);
    };
    /**
     * Low-level function that renders the given `tokens` using the given `writer`
     * and `context`. The `template` string is only needed for templates that use
     * higher-order sections to extract the portion of the original template that
     * was contained in that section.
     */
    function renderTokens(tokens, writer, context, template){

      var buffer = '';
      // This function is used to render an artbitrary template
      // in the current context by higher-order functions.
      function subRender(template){

        return writer.render(template, context);
      };
      var token,tokenValue,value;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        tokenValue = token[1];
        switch(token[0]){case '#':
        value = context.lookup(tokenValue);
        if(typeof value === 'object' || typeof value === 'string'){

          if(isArray(value)){

            for(var j = 0,jlen = value.length;j < jlen;++j){

              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
            };
          } else if(value){

            buffer += renderTokens(token[4], writer, context.push(value), template);
          };
        } else if(isFunction(value)){

          var text = template == null ? null : template.slice(token[3], token[5]);
          value = value.call(context.view, text, subRender);
          if(value != null)buffer += value;
        } else if(value){

          buffer += renderTokens(token[4], writer, context, template);
        };;
        break;case '^':
        value = context.lookup(tokenValue);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if(!value || (isArray(value) && value.length === 0)){

          buffer += renderTokens(token[4], writer, context, template);
        };
        break;case '>':
        value = writer.getPartial(tokenValue);
        if(isFunction(value))buffer += value(context);
        break;case '&':
        value = context.lookup(tokenValue);
        if(value != null)buffer += value;
        break;case 'name':
        value = context.lookup(tokenValue);
        if(value != null)buffer += mustache.escape(value);
        break;case 'text':
        buffer += tokenValue;
        break;};
      };
      return buffer;
    };
    /**
     * Forms the given array of `tokens` into a nested tree structure where
     * tokens that represent a section have two additional items: 1) an array of
     * all tokens that appear in that section and 2) the index in the original
     * template that represents the end of that section.
     */
    function nestTokens(tokens){

      var tree = [];
      var collector = tree;
      var sections = [];
      var token;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        switch(token[0]){case '#':case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;default:
        collector.push(token);};
      };
      return tree;
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

            lastToken = token;
            squashedTokens.push(token);
          };
        };
      };
      return squashedTokens;
    };
    function escapeTags(tags){

      return [new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1]))];
    };
    /**
     * Breaks up the given `template` string into a tree of token objects. If
     * `tags` is given here it must be an array with two string values: the
     * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
     * course, the default is to use mustaches (i.e. Mustache.tags).
     */
    function parseTemplate(template, tags){

      template = template || '';
      tags = tags || mustache.tags;
      if(typeof tags === 'string')tags = tags.split(spaceRe);
      if(tags.length !== 2)throw new Error('Invalid tags: ' + tags.join(', '));
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
            if(chr == '\n')stripSpace();
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
        if(!scanner.scan(tagRes[1]))throw new Error('Unclosed tag at ' + scanner.pos);
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
          tags = value.split(spaceRe);
          if(tags.length !== 2){

            throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
          };
          tagRes = escapeTags(tags);
        };;;
      };
      // Make sure there are no open sections when we're done.
      openSection = sections.pop();
      if(openSection){

        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      };
      return nestTokens(squashTokens(tokens));
    };
    mustache.name = "mustache.js";
    mustache.version = "0.7.3";
    mustache.tags = ["{{", "}}"];
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
    mustache.parse = parseTemplate;
    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;
    // All Mustache.* functions use this writer.
    var defaultWriter = new Writer();
    /**
     * Clears all cached templates and partials in the default writer.
     */
    mustache.clearCache = function(){

      return defaultWriter.clearCache();
    };
    /**
     * Compiles the given `template` to a reusable function using the default
     * writer.
     */
    mustache.compile = function(template, tags){

      return defaultWriter.compile(template, tags);
    };
    /**
     * Compiles the partial with the given `name` and `template` to a reusable
     * function using the default writer.
     */
    mustache.compilePartial = function(name, template, tags){

      return defaultWriter.compilePartial(name, template, tags);
    };
    /**
     * Compiles the given array of tokens (the output of a parse) to a reusable
     * function using the default writer.
     */
    mustache.compileTokens = function(tokens, template){

      return defaultWriter.compileTokens(tokens, template);
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * A row of buttons used to switch between connected pages. The buttons can be
 * right- or left-aligned, or they can be justified, i.e. they will be stretched
 * to fill the available width.
 *
 * <h2>Markup</h2>
 * Each Tabs widget contains an unordered list element (<code>ul</code>), which
 * will be created if not already present.
 * The tabs are list items (<code>li</code>). Each tab can contain
 * a button with a <code>tabPage</code> data attribute where the value is a
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
 *       <td><code>qx-tabs-justify</code></td>
 *       <td>Container element</td>
 *       <td>Styles the tab buttons when they are stretched to fill out the available width</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-right</code></td>
 *       <td>Container element</td>
 *       <td>Styles the tab buttons when they are right-aligned</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-button</code></td>
 *       <td>Tab (<code>li</code>)</td>
 *       <td>Identifies and styles the tabs</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-tabs-button-active</code></td>
 *       <td>Tab (<code>li</code>)</td>
 *       <td>Identifies and styles the currently selected tab. Applied in addition to <code>qx-tabs-button</code></td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h2 class="widget-markup">Generated DOM Structure</h2>
 *
 * @require(qx.module.Template)
 * @require(qx.module.Animation)
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
     * @return {qx.ui.website.Tabs}
     */
    tabs : function(align, preselected){

      var tabs = new qx.ui.website.Tabs(this);
      if(typeof preselected == "number"){

        tabs.setConfig("preselected", preselected);
      };
      tabs.init();
      if(align){

        tabs.setConfig("align", align);
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
     * rendering, or <code>nullcode> if no page should be opened.
     *
     * Default value: <pre>0</pre>
     *
     * *align*
     *
     * Configuration for the alignment of the tab buttons. This possible
     * values are <code>left</code>, <code>justify</code> and
     * <code>right</code>
     *
     * Default value: <pre>left</pre>
     *
     *
     * *animationTiming*
     *
     * Controls the page switching animation sequence:
     * "sequential" means the animation to show the new page will
     * only start after the animation to hide the old page is
     * finished. "parallel" means the animations will be started
     * (almost) simultaneously.
     *
     * Default value: <pre>parallel</pre>
     *
     *
     * *hideAnimation*
     *
     * The animation used to hide the previous page when
     * a new one is selected
     *
     * Default value: <pre>null</pre>
     *
     *
     * *showAnimation*
     *
     * The animation used to show a newly selected page.
     *
     * Default value: <pre>null</pre>
     */
    _config : {
      preselected : 0,
      align : "left",
      animationTiming : "sequential",
      showAnimation : null,
      hideAnimation : null
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
      this._forEachElementWrapped(function(tabs){

        var cssPrefix = this.getCssPrefix();
        if(tabs.getChildren("ul").length === 0){

          var list = qxWeb.create("<ul/>");
          var content = tabs.getChildren();
          if(content.length > 0){

            list.insertBefore(content.eq(0));
          } else {

            tabs.append(list);
          };
        };
        tabs.find("> ul").removeClasses([cssPrefix + "-justify", cssPrefix + "-right"]);
        var align = tabs.getConfig("align");
        if(align == "justify"){

          tabs.find("> ul").addClass(cssPrefix + "-justify");
        } else if(align == "right"){

          tabs.find("> ul").addClass(cssPrefix + "-right");
        };
        var buttons = tabs.getChildren("ul").getFirst().getChildren("li").not("." + cssPrefix + "-page");
        buttons.addClass(cssPrefix + "-button")._forEachElementWrapped(function(button){

          tabs._getPage(button).hide();
          button.onWidget("click", this._onClick, tabs);
          var pageSelector = button.getData("qx-tab-page");
          if(pageSelector){

            qxWeb(pageSelector).addClass(cssPrefix + "-page");
          };
        }.bind(this));
        if(align == "right"){

          buttons.remove();
          for(var i = buttons.length - 1;i >= 0;i--){

            tabs.find("> ul").append(buttons[i]);
          };
        };
        var active = buttons.filter("." + cssPrefix + "-button-active");
        var preselected = this.getConfig("preselected");
        if(active.length === 0 && typeof preselected == "number"){

          buttons.eq(preselected).addClass(cssPrefix + "-button-active");
        };
        this._getPage(buttons.filter("." + cssPrefix + "-button-active")).show();
        tabs.getChildren("ul").getFirst().onWidget("keydown", this._onKeyDown, this);
      }.bind(this));
      return true;
    },
    render : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        var content = [];
        var pages = [];
        var selected;
        tabs.find("> ul > ." + cssPrefix + "-button")._forEachElementWrapped(function(li){

          li.offWidget("click", tabs._onClick, tabs);
          pages.push(li.getData("qx-tab-page"));
          content.push(li.find("> button").getHtml());
          if(li.hasClass(cssPrefix + "-button-active")){

            selected = content.length - 1;
          };
        });
        tabs.find("> ul").setHtml("");
        var toRight = this.getConfig("align") == "right" && !tabs.find("> ul").hasClass(cssPrefix + "-right");
        var fromRight = this.getConfig("align") != "right" && tabs.find("> ul").hasClass(cssPrefix + "-right");
        if(toRight || fromRight){

          content.reverse();
          pages.reverse();
          selected = content.length - 1 - selected;
        };
        tabs.find("> ul").removeClasses([cssPrefix + "-justify", cssPrefix + "-right"]);
        content.forEach(function(content, i){

          tabs.addButton(content, pages[i]);
          var page = tabs._getPage(tabs.find("> ul > ." + cssPrefix + "-button:last-child"));
          if(i == selected){

            tabs.find("> ul > ." + cssPrefix + "-button:first-child").removeClass(cssPrefix + "-button-active");
            tabs.find("> ul > ." + cssPrefix + "-button:last-child").addClass(cssPrefix + "-button-active");
            page.show();
          } else {

            page.hide();
          };
        });
        var align = tabs.getConfig("align");
        if(align == "justify"){

          tabs.find("> ul").addClass(cssPrefix + "-justify");
        } else if(align == "right"){

          tabs.find("> ul").addClass(cssPrefix + "-right");
        };
      });
      return this;
    },
    /**
     * Adds a new tab button
     *
     * @param label {String} The button's content. Can include markup.
     * @param pageSelector {String} CSS Selector that identifies the associated page
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    addButton : function(label, pageSelector){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(item){

        var link = qxWeb.create(qxWeb.template.render(item.getTemplate("button"), {
          content : label
        })).addClass(cssPrefix + "-button");
        var list = item.find("> ul");
        var links = list.getChildren("li");
        if(list.hasClass(cssPrefix + "-right") && links.length > 0){

          link.insertBefore(links.getFirst());
        } else {

          link.appendTo(list);
        };
        link.onWidget("click", this._onClick, item).addClass(cssPrefix + "-button");
        if(item.find("> ul ." + cssPrefix + "-button").length === 1){

          link.addClass(cssPrefix + "-button-active");
        };
        if(pageSelector){

          link.setData("qx-tab-page", pageSelector);
          var page = this._getPage(link);
          page.addClass(cssPrefix + "-page");
          if(!link.hasClass(cssPrefix + "-button-active")){

            page.hide();
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

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        var buttons = tabs.find("> ul > ." + cssPrefix + "-button");
        var oldButton = tabs.find("> ul > ." + cssPrefix + "-button-active").removeClass(cssPrefix + "-button-active");
        if(this.getConfig("align") == "right"){

          index = buttons.length - 1 - index;
        };
        var newButton = buttons.eq(index).addClass(cssPrefix + "-button-active");
        tabs._showPage(newButton, oldButton);
        tabs.emit("changeSelected", index);
      });
      return this;
    },
    /**
     * Initiates the page switch when a button was clicked
     *
     * @param e {Event} Click event
     */
    _onClick : function(e){

      var clickedButton = e.getCurrentTarget();
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        var oldButton = tabs.find("> ul > ." + cssPrefix + "-button-active");
        if(oldButton[0] == clickedButton){

          return;
        };
        oldButton.removeClass(cssPrefix + "-button-active");
        var newButton;
        var buttons = tabs.find("> ul > ." + cssPrefix + "-button")._forEachElementWrapped(function(button){

          if(clickedButton === button[0]){

            newButton = button;
          };
        });
        tabs._showPage(newButton, oldButton);
        newButton.addClass(cssPrefix + "-button-active");
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

      var cssPrefix = this.getCssPrefix();
      var key = e.getKeyIdentifier();
      if(!(key == "Left" || key == "Right")){

        return;
      };
      var rightAligned = this.getConfig("align") == "right";
      var buttons = this.find("> ul > ." + cssPrefix + "-button");
      if(rightAligned){

        buttons.reverse();
      };
      var active = this.find("> ul > ." + cssPrefix + "-button-active");
      var next;
      if(key == "Right"){

        if(!rightAligned){

          next = active.getNext("." + cssPrefix + "-button");
        } else {

          next = active.getPrev("." + cssPrefix + "-button");
        };
      } else {

        if(!rightAligned){

          next = active.getPrev("." + cssPrefix + "-button");
        } else {

          next = active.getNext("." + cssPrefix + "-button");
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
     * @param newButton {qxWeb} clicked button
     * @param oldButton {qxWeb} previously active button
     */
    _showPage : function(newButton, oldButton){

      var oldPage = this._getPage(oldButton);
      var newPage = this._getPage(newButton);
      if(oldPage[0] == newPage[0]){

        return;
      };
      var showAnimation = this.getConfig("showAnimation");
      var hideAnimation = this.getConfig("hideAnimation");
      this._switchPages(oldPage, newPage, hideAnimation, showAnimation);
    },
    /**
     * Executes a page switch
     *
     * @param oldPage {qxWeb} the previously selected page
     * @param newPage {qxWeb} the newly selected page
     * @param hideAnimation {Map} animation description used to hide the old page
     * @param showAnimation {Map} animation description used to show the new page
     */
    _switchPages : function(oldPage, newPage, hideAnimation, showAnimation){

      var timing = this.getConfig("animationTiming");
      var oldOverflow = oldPage.getStyle("overflow");
      this._toggleClickListeners(false);
      if(hideAnimation){

        if(oldOverflow == "visible"){

          oldPage.setStyle("overflow", "hidden");
        };
        oldPage.once("animationEnd", function(){

          oldPage.hide();
          if(oldOverflow == "visible"){

            oldPage.setStyle("overflow", oldOverflow);
          };
          if(timing == "sequential"){

            this._showNewPage(newPage, showAnimation);
          };
        }, this);
        if(timing == "parallel"){

          this._showNewPage(newPage, showAnimation);
        };
        oldPage.animate(hideAnimation);
      } else {

        oldPage.hide();
        this._showNewPage(newPage, showAnimation);
      };
    },
    /**
     * Shows a newly selected tab page
     *
     * @param newPage {qxWeb} the newly selected page
     * @param showAnimation {Map} animation description used to show the new pag
     */
    _showNewPage : function(newPage, showAnimation){

      if(newPage.length == 0){

        this._toggleClickListeners(true);
        return;
      };
      if(!showAnimation){

        this._toggleClickListeners(true);
        newPage.show();
        return;
      };
      showAnimation = JSON.parse(qxWeb.template.render(JSON.stringify(showAnimation), newPage.getProperty("initialStyles")));
      // apply the first frame of the animation before showing the
      // page to prevent an ugly visible "jump"
      if(showAnimation.keyFrames && showAnimation.keyFrames["0"]){

        newPage.setStyles(showAnimation.keyFrames["0"]);
      };
      newPage.show();
      // set overflow to hidden so that the content won't show
      // outside of the page as it grows
      var newOverflow = newPage.getStyle("overflow");
      if(newOverflow == "visible"){

        newPage.setStyle("overflow", "hidden");
      };
      newPage.once("animationEnd", function(){

        if(newOverflow == "visible"){

          newPage.setStyle("overflow", newOverflow);
        };
        this._toggleClickListeners(true);
      }.bind(this)).animate(showAnimation);
    },
    /**
     * Enable/disable the click listeners on the page buttons. This is used
     * to prevent interaction while page change animations are running.
     * @param on {Boolean} <code>true</code> enables listeners
     */
    _toggleClickListeners : function(on){

      var func = on ? "onWidget" : "offWidget";
      this.find("." + this.getCssPrefix() + "-button")._forEachElementWrapped(function(button){

        button[func]("click", this._onClick);
      }.bind(this));
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

        pageSelector = button.getData("qx-tab-page");
      };
      return qxWeb(pageSelector);
    },
    dispose : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        tabs.find("." + cssPrefix + "-button").offWidget("click", tabs._onClick, tabs);
        tabs.getChildren("ul").getFirst().offWidget("keydown", tabs._onKeyDown, tabs).setHtml("");
      });
      this.setHtml("").removeClass(cssPrefix);
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
    contains : qx.lang.Object.contains
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "object" : {
        "clone" : statics.clone,
        "getValues" : statics.getValues,
        "invert" : statics.invert,
        "contains" : statics.contains
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * The Accordion is a group of vertically stacked panels (here called pages),
 * each with a header.
 * By default, only one page is visible while the others are collapsed.
 * Clicking a collapsed page's header will expand it while collapsing the
 * previously expanded page. The expand and collapse operations can be
 * visually customized using CSS animations.
 *
 * <h2>Markup</h2>
 * The Accordion contains an unordered list element (<code>ul</code>), which
 * will be created if not already present.
 * Headers and pages are list items (<code>li</code>). Each header must contain
 * a button with a <code>tabPage</code> data attribute where the value is a
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
 *       <td>Page header (<code>li</code>)</td>
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
     * *button*
     *
     * Template for the list items containing the panel buttons.
     *
     * Default value:
     * <pre><li><button>{{{content}}}</button></li></pre>
     */
    _templates : {
      button : "<li><button>{{{content}}}</button></li>"
    },
    /**
     * *preselected*
     * The index of the page that should be opened after initial
     * rendering, or <code>nullcode> if no page should be opened.
     *
     * Default value: <pre>null</pre>
     *
     * *animationTiming*
     *
     * Controls the page switching animation sequence:
     * "sequential" means the animation to show the new page will
     * only start after the animation to hide the old page is
     * finished. "parallel" means the animations will be started
     * (almost) simultaneously.
     *
     * Default value: <pre>parallel</pre>
     *
     *
     * *animationStyles*
     *
     * Style properties used to animate page switching. Allowed values:
     * "parallel", "sequential"
     *
     * Default value:
     * <pre>["height", "paddingTop", "paddingBottom"]</pre>
     *
     *
     * *hideAnimation*
     *
     * The animation used to hide the previous page when
     * a new one is selected
     *
     * Default value:
     * <pre>{
     *   duration: 500,
     *   delay: 0,
     *   keep: 100,
     *   timing: "linear",
     *   keyFrames: {
     *     0: {
     *       height : "{{height}}",
     *       paddingTop : "{{paddingTop}}",
     *       paddingBottom : "{{paddingBottom}}"
     *     },
     *     100: {
     *       height : "0px",
     *       paddingTop: "0px",
     *       paddingBottom: "0px"
     *     }
     *   }
     * }</pre>
     *
     *
     * *showAnimation*
     *
     * The animation used to show a newly selected page.
     *
     * Default value:
     * <pre>{
     *   duration: 500,
     *   delay: 0,
     *   keep: 100,
     *   timing: "linear",
     *   keyFrames: {
     *     0: {
     *       height : "0px",
     *       paddingTop: "0px",
     *       paddingBottom: "0px"
     *     },
     *     100 : {
     *       height :  "{{height}}",
     *       paddingTop : "{{paddingTop}}",
     *       paddingBottom : "{{paddingBottom}}"
     *     }
     *   }
     * }</pre>
     */
    _config : {
      preselected : null,
      animationTiming : "parallel",
      animationStyles : ["height", "paddingTop", "paddingBottom"],
      hideAnimation : {
        duration : 500,
        delay : 0,
        keep : 100,
        timing : "linear",
        keyFrames : {
          '0' : {
            height : "{{height}}",
            paddingTop : "{{paddingTop}}",
            paddingBottom : "{{paddingBottom}}"
          },
          '100' : {
            height : "0px",
            paddingTop : "0px",
            paddingBottom : "0px"
          }
        }
      },
      showAnimation : {
        duration : 500,
        delay : 0,
        keep : 100,
        timing : "linear",
        keyFrames : {
          '0' : {
            height : "0px",
            paddingTop : "0px",
            paddingBottom : "0px"
          },
          '100' : {
            height : "{{height}}",
            paddingTop : "{{paddingTop}}",
            paddingBottom : "{{paddingBottom}}"
          }
        }
      }
    },
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
      if(preselected){

        tabs.setConfig("preselected", preselected);
      };
      accordion.init();
      return accordion;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        tabs.find("> ul > ." + cssPrefix + "-page")._forEachElementWrapped(function(page){

          tabs._storeInitialStyles(page);
        }.bind(tabs));
        tabs.render();
      });
    },
    render : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(tabs){

        tabs.find("> ul > ." + cssPrefix + "-button")._forEachElementWrapped(function(button){

          var page = this._getPage(button);
          if(page.length === 0){

            return;
          };
          this._storeInitialStyles(page);
          if(button.hasClass(cssPrefix + "-button-active")){

            page.show();
          } else {

            page.hide();
          };
        }.bind(this));
      }.bind(this));
      return this;
    },
    /**
     * Stores the page's styles for the switching animations
     * @param page {qxWeb} Accordion page
     */
    _storeInitialStyles : function(page){

      var isHidden = page.getStyle("display") === "none";
      var accordion = page.getAncestors("." + this.getCssPrefix());
      var accHeight;
      if(!accordion[0].style.height){

        accHeight = accordion.getHeight();
      };
      if(isHidden){

        if(accHeight){

          accordion.setStyle("height", accHeight + "px");
        };
        page.show();
      };
      var styles = page.getStyles(this.getConfig("animationStyles"));
      if(styles.height){

        page[0].style.height = "";
        styles.height = page.getHeight() + "px";
      };
      page.setProperty("initialStyles", styles);
      if(isHidden){

        if(accHeight){

          accordion.setStyle("height", "");
        };
      };
    },
    // overridden
    _showPage : function(newButton, oldButton){

      var oldPage = this._getPage(oldButton);
      var newPage = this._getPage(newButton);
      if(newPage.length > 0){

        var showAnimation = this.getConfig("showAnimation");
        if(showAnimation){

          showAnimation = JSON.parse(qxWeb.template.render(JSON.stringify(showAnimation), newPage.getProperty("initialStyles")));
        };
      };
      if(oldPage.length > 0){

        var hideAnimation = this.getConfig("hideAnimation");
        if(hideAnimation){

          hideAnimation = JSON.parse(qxWeb.template.render(JSON.stringify(hideAnimation), {
            height : oldPage.getHeight() + "px"
          }));
        };
      };
      this._switchPages(oldPage, newPage, hideAnimation, showAnimation);
    },
    /**
     * Allows content selection using the up and down arrow keys
     * @param e {Event} keydown event
     */
    _onKeyDown : function(e){

      var cssPrefix = this.getCssPrefix();
      var key = e.getKeyIdentifier();
      if(!(key == "Up" || key == "Down")){

        return;
      };
      var buttons = this.find("> ul > ." + cssPrefix + "-button");
      var active = this.find("> ul > ." + cssPrefix + "-button-active");
      var next;
      if(key == "Down"){

        next = active.getNextAll("." + cssPrefix + "-button").eq(0);
      } else {

        next = active.getPrevAll("." + cssPrefix + "-button").eq(0);
      };
      if(next.length > 0){

        var idx = buttons.indexOf(next);
        this.select(idx);
        next.getChildren("button").focus();
      };
    },
    // overridden
    _onClick : function(e){

      var clickedButton = e.getCurrentTarget();
      var cssPrefix = this.getCssPrefix();
      var sameButton = false;
      this._forEachElementWrapped(function(tabs){

        var oldButton = tabs.find("> ul > ." + cssPrefix + "-button-active");
        if(oldButton[0] == clickedButton){

          sameButton = true;
          oldButton.removeClass(cssPrefix + "-button-active");
          this._showPage(null, oldButton);
        };
      });
      if(!sameButton){

        this.base(arguments, e);
      };
    }
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
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Normalization for native mouse events
 *
 * @require(qx.module.Environment)
 * @require(qx.module.Event)
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.Mouse", {
  statics : {
    /**
     * List of event types to be normalized
     */
    TYPES : ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"],
    /**
     * List qx.module.event.Mouse methods to be attached to native mouse event
     * objects
     * @internal
     */
    BIND_METHODS : ["getButton", "getViewportLeft", "getViewportTop", "getDocumentLeft", "getDocumentTop", "getScreenLeft", "getScreenTop"],
    /**
     * Standard mouse button mapping
     */
    BUTTONS_DOM2 : {
      '0' : "left",
      '2' : "right",
      '1' : "middle"
    },
    /**
     * Legacy Internet Explorer mouse button mapping
     */
    BUTTONS_MSHTML : {
      '1' : "left",
      '2' : "right",
      '4' : "middle"
    },
    /**
     * Returns the identifier of the mouse button that change state when the
     * event was triggered
     *
     * @return {String} One of <code>left</code>, <code>right</code> or
     * <code>middle</code>
     */
    getButton : function(){

      switch(this.type){case "contextmenu":
      return "right";case "click":
      // IE does not support buttons on click --> assume left button
      if(qxWeb.env.get("browser.name") === "ie" && qxWeb.env.get("browser.documentmode") < 9){

        return "left";
      };default:
      if(this.target !== undefined){

        return qx.module.event.Mouse.BUTTONS_DOM2[this.button] || "none";
      } else {

        return qx.module.event.Mouse.BUTTONS_MSHTML[this.button] || "none";
      };};
    },
    /**
     * Get the horizontal coordinate at which the event occurred relative
     * to the viewport.
     *
     * @return {Number} The horizontal mouse position
     */
    getViewportLeft : function(){

      return this.clientX;
    },
    /**
     * Get the vertical coordinate at which the event occurred relative
     * to the viewport.
     *
     * @return {Number} The vertical mouse position
     * @signature function()
     */
    getViewportTop : function(){

      return this.clientY;
    },
    /**
     * Get the horizontal position at which the event occurred relative to the
     * left of the document. This property takes into account any scrolling of
     * the page.
     *
     * @return {Number} The horizontal mouse position in the document.
     */
    getDocumentLeft : function(){

      if(this.pageX !== undefined){

        return this.pageX;
      } else {

        var win = qx.dom.Node.getWindow(this.srcElement);
        return this.clientX + qx.bom.Viewport.getScrollLeft(win);
      };
    },
    /**
     * Get the vertical position at which the event occurred relative to the
     * top of the document. This property takes into account any scrolling of
     * the page.
     *
     * @return {Number} The vertical mouse position in the document.
     */
    getDocumentTop : function(){

      if(this.pageY !== undefined){

        return this.pageY;
      } else {

        var win = qx.dom.Node.getWindow(this.srcElement);
        return this.clientY + qx.bom.Viewport.getScrollTop(win);
      };
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

      return this.screenX;
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

      return this.screenY;
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
      var bindMethods = qx.module.event.Mouse.BIND_METHODS;
      for(var i = 0,l = bindMethods.length;i < l;i++){

        if(typeof event[bindMethods[i]] != "function"){

          event[bindMethods[i]] = qx.module.event.Mouse[bindMethods[i]].bind(event);
        };
      };
      return event;
    }
  },
  defer : function(statics){

    qxWeb.$registerEventNormalization(qx.module.event.Mouse.TYPES, statics.normalize);
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
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
 * @require(qx.module.event.Mouse)
 * @require(qx.module.Transform)
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
    /** Fired with each mouse move event */
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
        var defaultVal = qx.Bootstrap.isArray(step) ? step[0] : this.getConfig("minimum");
        this.setProperty("value", defaultVal);
      };
      this._forEachElementWrapped(function(slider){

        slider.onWidget("click", slider._onClick, slider).onWidget("focus", slider._onSliderFocus, slider);
        qxWeb(document.documentElement).on("mouseup", slider._onMouseUp, slider);
        qxWeb(window).onWidget("resize", slider._onWindowResize, slider);
        if(slider.getChildren("." + cssPrefix + "-knob").length === 0){

          slider.append(qx.ui.website.Widget.create("<button>").addClass(cssPrefix + "-knob"));
        };
        slider.getChildren("." + cssPrefix + "-knob").setAttributes({
          "draggable" : "false",
          "unselectable" : "true"
        }).setHtml(slider._getKnobContent()).onWidget("mousedown", slider._onMouseDown, slider).onWidget("dragstart", slider._onDragStart, slider).onWidget("focus", slider._onKnobFocus, slider).onWidget("blur", slider._onKnobBlur, slider);
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
      if(!qx.Bootstrap.isArray(step)){

        var min = this.getConfig("minimum");
        var max = this.getConfig("maximum");
        if(value < min){

          value = min;
        };
        if(value > max){

          value = max;
        };
        if(qx.Bootstrap.getClass(step) == "Number"){

          value = Math.round(value / step) * step;
        };
      };
      this.setProperty("value", value);
      if(!qx.Bootstrap.isArray(step) || step.indexOf(value) != -1){

        this.__valueToPosition(value);
        this.getChildren("." + this.getCssPrefix() + "-knob").setHtml(this._getKnobContent());
        this.emit("changeValue", value);
      };
      return this;
    },
    render : function(){

      var step = this.getConfig("step");
      if(qx.Bootstrap.isArray(step)){

        this._getPixels();
        if(step.indexOf(this.getValue()) == -1){

          this.setValue(step[0]);
        } else {

          this.setValue(this.getValue());
        };
      } else if(qx.Bootstrap.getClass(step) == "Number"){

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
      return parseInt(knobWidth / 2, 10);
    },
    /**
     * Returns the boundaries (in pixels) of the slider's range of motion
     * @return {Map} a map with the keys <code>min</code> and <code>max</code>
     */
    _getDragBoundaries : function(){

      var paddingLeft = parseInt(this.getStyle("paddingLeft") || 0);
      var paddingRight = parseInt(this.getStyle("paddingRight") || 0);
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
      if(!qx.Bootstrap.isArray(step)){

        return [];
      };
      var dragBoundaries = this._getDragBoundaries();
      var pixel = [];
      // First pixel value is fixed
      pixel.push(dragBoundaries.min);
      var lastIndex = step.length - 1;
      var paddingLeft = parseInt(this.getStyle("paddingLeft") || 0);
      var paddingRight = parseInt(this.getStyle("paddingRight") || 0);
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
        if(qx.Bootstrap.getClass(step) == "Number"){

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
     * Takes the click position and sets slider value to the nearest step.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onClick : function(e){

      if(e.getDocumentLeft() === 0 && e.getDocumentTop() === 0){

        return;
      };
      this.setValue(this._getNearestValue(e.getDocumentLeft()));
    },
    /**
     * Listener of mousedown event. Initializes drag or tracking mode.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onMouseDown : function(e){

      // this can happen if the user releases the button while dragging outside
      // of the browser viewport
      if(this.__dragMode){

        return;
      };
      this.__dragMode = true;
      qxWeb(document.documentElement).on("mousemove", this._onMouseMove, this).setStyle("cursor", "pointer");
      e.stopPropagation();
    },
    /**
     * Listener of mouseup event. Used for cleanup of previously
     * initialized modes.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onMouseUp : function(e){

      if(this.__dragMode === true){

        // Cleanup status flags
        delete this.__dragMode;
        this.__valueToPosition(this.getValue());
        qxWeb(document.documentElement).off("mousemove", this._onMouseMove, this).setStyle("cursor", "auto");
      };
      e.stopPropagation();
    },
    /**
     * Listener of mousemove event for the knob. Only used in drag mode.
     *
     * @param e {qx.event.Emitter} Incoming event object
     */
    _onMouseMove : function(e){

      e.preventDefault();
      if(this.__dragMode){

        var dragPosition = e.getDocumentLeft();
        var dragBoundaries = this._getDragBoundaries();
        var paddingLeft = parseInt(this.getStyle("paddingLeft") || 0);
        var positionKnob = dragPosition - this.getOffset().left - this._getHalfKnobWidth() - paddingLeft;
        if(dragPosition >= dragBoundaries.min && dragPosition <= dragBoundaries.max){

          this.setValue(this._getNearestValue(dragPosition));
          if(positionKnob > 0){

            this._setKnobPosition(positionKnob);
            this.emit("changePosition", positionKnob);
          };
        };
      };
      e.stopPropagation();
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

      this.getChildren("." + this.getCssPrefix() + "-knob").onWidget("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the event listener for keyboard support from the knob on blur
     * @param e {Event} blur event
     */
    _onKnobBlur : function(e){

      this.getChildren("." + this.getCssPrefix() + "-knob").offWidget("keydown", this._onKeyDown, this);
    },
    /**
     * Moves the knob if the left or right arrow key is pressed
     * @param e {Event} keydown event
     */
    _onKeyDown : function(e){

      var newValue;
      var currentValue = this.getValue();
      var step = this.getConfig("step");
      var stepType = qx.Bootstrap.getClass(step);
      var key = e.getKeyIdentifier();
      if(key == "Right"){

        if(stepType === "Array"){

          var idx = step.indexOf(currentValue);
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

          var idx = step.indexOf(currentValue);
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
      if(qx.Bootstrap.isArray(this.getConfig("step"))){

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
      var paddingLeft = parseInt(this.getStyle("paddingLeft") || 0);
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

        qxWeb(document.documentElement).off("mouseup", slider._onMouseUp, slider);
        qxWeb(window).offWidget("resize", slider._onWindowResize, slider);
        slider.offWidget("click", slider._onClick, slider).offWidget("focus", slider._onSliderFocus, slider);
        slider.getChildren("." + this.getCssPrefix() + "-knob").offWidget("mousedown", slider._onMouseDown, slider).offWidget("dragstart", slider._onDragStart, slider).offWidget("focus", slider._onKnobFocus, slider).offWidget("blur", slider._onKnobBlur, slider).offWidget("keydown", slider._onKeyDown, slider);
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
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
     * Sets the menu to be shown when the button is clicked
     *
     * @param menu {qxWeb} menu element wrapped in a collection
     * @return {qxWeb} The collection for chaining
     */
    setMenu : function(menu){

      this.on("click", function(e){

        if(menu.getStyle("display") === "none"){

          menu.placeTo(this, "bottom-left");
          menu.show();
          qxWeb(document).once("click", function(){

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
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Label", {
  extend : qx.ui.website.Widget,
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    /**
     * Sets the label's text wrapping behavior
     *
     * @param value {Boolean} <code>true</code> if the label's text should
     * wrap if too long
     * @return {qxWeb} The collection for chaining
     */
    setWrap : function(value){

      // apply the white space style to the label to force it not
      // to wrap if wrap is set to false [BUG #3732]
      var whiteSpace = value ? "normal" : "nowrap";
      this.setStyle("whiteSpace", whiteSpace);
      return this;
    },
    /**
     * Returns the label's text wrapping behavior
     *
     * @return {Boolean} <code>true</code> if the label's text will wrap
     */
    getWrap : function(){

      var whiteSpace = this.getStyle("whiteSpace");
      return whiteSpace == "normal";
    },
    /**
     * Sets the label's text
     *
     * @param value {String} label text
     * @return {qxWeb} The collection for chaining
     */
    setValue : function(value){

      if(value === null){

        value = "";
      };
      this.setHtml(value);
      return this;
    },
    /**
     * Returns the label's text
     *
     * @return {String} label text
     */
    getValue : function(){

      return this.getHtml();
    }
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
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
 *       <td><code>qx-calendar-prev</code></td>
 *       <td><code>button</code></td>
 *       <td>Identifies and styles the "previous month" button</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-next</code></td>
 *       <td><code>button</code></td>
 *       <td>Identifies and styles the "next month" button</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-othermonth</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles calendar cells for days from the previous or following month</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-day</code></td>
 *       <td>Day (<code>button</code>)</td>
 *       <td>Identifies and styles the day buttons</td>
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
     * *control*
     *
     * Template for the controls. This should be a <code>tr</code> tag containing
     * the first row of the calendar.
     *
     * Default value:
     * <pre><tr>
     *  <td colspan='1'><button class='{{cssPrefix}}-prev' title='Previous Month'>&lt;</button></td>
     *  <td colspan='5'>{{month}} {{year}}</td>
     *  <td colspan='1'><button class='{{cssPrefix}}-next' title='Next Month'>&gt;</button></td>
     * </tr></pre>
     *
     *
     * *dayRow*
     *
     * Template for the row of each day. This should be a tr tag containing the day names.
     *
     * Default value:
     * <pre><tr>
     *  {{#row}}<td>{{.}}</td>{{/row}}
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
     * <pre><table><thead>{{{thead}}}</thead><tbody>{{{tbody}}}</tbody></table></pre>
     */
    _templates : {
      controls : "<tr>" + "<td colspan='1'><button class='{{cssPrefix}}-prev' title='Previous Month'>&lt;</button></td>" + "<td colspan='5'>{{month}} {{year}}</td>" + "<td colspan='1'><button class='{{cssPrefix}}-next' title='Next Month'>&gt;</button></td>" + "</tr>",
      dayRow : "<tr>" + "{{#row}}<td>{{.}}</td>{{/row}}" + "</tr>",
      row : "<tr>" + "{{#row}}<td class='{{cssClass}}'><button class='{{cssPrefix}}-day' value='{{date}}'>{{day}}</button></td>{{/row}}" + "</tr>",
      table : "<table><thead>{{{thead}}}</thead><tbody>{{{tbody}}}</tbody></table>"
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
     */
    _config : {
      monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dayNames : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
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
      this._forEachElementWrapped(function(calendar){

        calendar.showValue(new Date());
      });
      return true;
    },
    // overridden
    render : function(){

      this.showValue(this.getProperty("shownValue"));
      return this;
    },
    /**
     * Sets the given date as the current value displays it
     *
     * @param value {Date} Date to display.
     * @return {qx.ui.website.Calendar} The collection for chaining.
     */
    setValue : function(value){

      this.setProperty("value", value);
      this.showValue(value);
      this.emit("changeValue", value);
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
      return value ? new Date(value) : null;
    },
    /**
     * Displays the given date
     *
     * @param value {Date} Date to display.
     * @return {qx.ui.website.Calendar} The collection for chaining.
     */
    showValue : function(value){

      this.setProperty("shownValue", value);
      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(item){

        if(item.getAttribute("tabindex") < 0){

          item.setAttribute("tabindex", 0);
        };
        item.find("." + cssPrefix + "-prev").offWidget("click", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").offWidget("click", this._nextMonth, item);
        item.find("." + cssPrefix + "-day").offWidget("click", this._selectDay, item);
        item.offWidget("focus", this._onFocus, item, true).offWidget("blur", this._onBlur, item, true);
      }, this);
      this.setHtml(this._getTable(value));
      this._forEachElementWrapped(function(item){

        item.find("." + cssPrefix + "-prev").onWidget("click", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").onWidget("click", this._nextMonth, item);
        item.find("." + cssPrefix + "-day").onWidget("click", this._selectDay, item);
        item.onWidget("focus", this._onFocus, item, true).onWidget("blur", this._onBlur, item, true);
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
     * @param e {Event} The native click event.
     */
    _selectDay : function(e){

      var day = qxWeb(e.getTarget());
      var newStr = day.getAttribute("value");
      var newValue = new Date(newStr);
      this.setValue(newValue);
      this.find("." + this.getCssPrefix() + "-day[value='" + newStr + "']").focus();
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
        tbody : this._getWeekRows(date)
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

      return {
        month : this.getConfig("monthNames")[date.getMonth()],
        year : date.getFullYear(),
        cssPrefix : this.getCssPrefix()
      };
    },
    /**
     * Returns the week day names to be displayed in the calendar.
     *
     * @return {String[]} Array of day names.
     */
    _getDayRowData : function(){

      return {
        row : this.getConfig("dayNames")
      };
    },
    /**
     * Returns the table rows displaying the days of the month.
     *
     * @param date {Date} The date to be displayed.
     * @return {String} The table rows as an HTML string.
     */
    _getWeekRows : function(date){

      var weeks = [];
      var startOfWeek = 1;
      var cssPrefix = this.getCssPrefix();
      var helpDate = new Date(date.getFullYear(), date.getMonth(), 1);
      var firstDayOfWeek = helpDate.getDay();
      var today = new Date();
      helpDate = new Date(date.getFullYear(), date.getMonth(), 1, 12, 0, 0);
      var nrDaysOfLastMonth = (7 + firstDayOfWeek - startOfWeek) % 7;
      helpDate.setDate(helpDate.getDate() - nrDaysOfLastMonth);
      var cssPrefix = this.getCssPrefix();
      for(var week = 0;week < 6;week++){

        var data = {
          row : []
        };
        for(var i = 0;i < 7;i++){

          var cssClasses = helpDate.getMonth() !== date.getMonth() ? cssPrefix + "-othermonth" : "";
          if(this.getProperty("value")){

            cssClasses += helpDate.toDateString() === this.getProperty("value").toDateString() ? " " + cssPrefix + "-selected" : "";
          };
          cssClasses += today.toDateString() === helpDate.toDateString() ? " " + cssPrefix + "-today" : "";
          data.row.push({
            day : helpDate.getDate(),
            date : helpDate.toDateString(),
            cssPrefix : cssPrefix,
            cssClass : cssClasses
          });
          helpDate.setDate(helpDate.getDate() + 1);
        };
        weeks.push(qxWeb.template.render(this.getTemplate("row"), data));
      };
      return weeks.join("");
    },
    /**
     * Attaches the keydown listener.
     *
     * @param e {Event} focus event
     */
    _onFocus : function(e){

      this.onWidget("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the keydown listener if the focus moves outside of the calendar.
     *
     * @param e {Event} blur event
     */
    _onBlur : function(e){

      if(this.contains(e.getRelatedTarget()).length === 0){

        this.offWidget("keydown", this._onKeyDown, this);
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
    dispose : function(){

      var cssPrefix = this.getCssPrefix();
      this._forEachElementWrapped(function(item){

        item.find("." + cssPrefix + "-prev").offWidget("click", this._prevMonth, item);
        item.find("." + cssPrefix + "-next").offWidget("click", this._nextMonth, item);
        item.find("." + cssPrefix + "-day").offWidget("click", this._selectDay, item);
        item.offWidget("focus", this._onFocus, item, true).offWidget("blur", this._onBlur, item, true).offWidget("keydown", this._onKeyDown, item);
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
     2011-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Text selection manipulation module
 */
qx.Bootstrap.define("qx.module.TextSelection", {
  statics : {
    /**
     * Get the text selection of the first element.
     *
     * @return {String|null}
     */
    getTextSelection : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.get(el) : null;
      };
      return null;
    },
    /**
     * Get the length of the text selection of the first element.
     *
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionLength : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getLength(el) : null;
      };
      return null;
    },
    /**
     * Get the start of the text selection of the first element.
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionStart : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getStart(el) : null;
      };
      return null;
    },
    /**
     * Get the end of the text selection of the first element.
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionEnd : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getEnd(el) : null;
      };
      return null;
    },
    /**
     * Set the text selection of the first element in the collection
     * with the given start and end value.
     * If no end value is passed the selection will extend to the end.
     *
     * @param start {Integer} start of the selection (zero based)
     * @param end {Integer} end of the selection
     * @return {qxWeb} The collection for chaining.
     *
     * @attach {qxWeb}
     */
    setTextSelection : function(start, end){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        if(el){

          qx.bom.Selection.set(el, start, end);
        };
      };
      return this;
    },
    /**
     * Clears the text selection of all elements.
     *
     * @return {qxWeb} The collection for chaining.
     *
     * @attach {qxWeb}
     */
    clearTextSelection : function(){

      this._forEachElement(function(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        if(el){

          qx.bom.Selection.clear(el);
        };
      });
      return this;
    },
    /**
     * Checks if the given DOM node is a text input field or textarea
     *
     * @param el {Element} The node to check
     * @return {Boolean} <code>true</code> if the given node is an input field
     *
     * @attach {qxWeb}
     */
    __isInput : function(el){

      var tag = el.tagName ? el.tagName.toLowerCase() : null;
      return (tag === "input" || tag === "textarea");
    },
    /**
     * Returns the first text child node of the given element
     *
     * @param el {Element} DOM element
     * @return {Node|null} text node
     *
     * @attach {qxWeb}
     */
    __getTextNode : function(el){

      for(var i = 0,l = el.childNodes.length;i < l;i++){

        if(el.childNodes[i].nodeType === 3){

          return el.childNodes[i];
        };
      };
      return null;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "getTextSelection" : statics.getTextSelection,
      "getTextSelectionLength" : statics.getTextSelectionLength,
      "getTextSelectionStart" : statics.getTextSelectionStart,
      "getTextSelectionEnd" : statics.getTextSelectionEnd,
      "setTextSelection" : statics.setTextSelection,
      "clearTextSelection" : statics.clearTextSelection
    });
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
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * Low-level selection API to select elements like input and textarea elements
 * as well as text nodes or elements which their child nodes.
 *
 * @ignore(qx.bom.Element, qx.bom.Element.blur)
 */
qx.Bootstrap.define("qx.bom.Selection", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Returns the native selection object.
     *
     * @signature function(documentNode)
     * @param documentNode {document} Document node to retrieve the connected selection from
     * @return {Selection} native selection object
     */
    getSelectionObject : qx.core.Environment.select("html.selection", {
      "selection" : function(documentNode){

        return documentNode.selection;
      },
      // suitable for gecko, opera, webkit and mshtml >= 9
      "default" : function(documentNode){

        return qx.dom.Node.getWindow(documentNode).getSelection();
      }
    }),
    /**
     * Returns the current selected text.
     *
     * @signature function(node)
     * @param node {Node} node to retrieve the selection for
     * @return {String|null} selected text as string
     */
    get : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        // to get the selected text in legacy IE you have to work with the TextRange
        // of the selection object. So always pass the document node to the
        // Range class to get this TextRange object.
        var rng = qx.bom.Range.get(qx.dom.Node.getDocument(node));
        return rng.text;
      },
      // suitable for gecko, opera and webkit
      "default" : function(node){

        if(this.__isInputOrTextarea(node)){

          return node.value.substring(node.selectionStart, node.selectionEnd);
        } else {

          return this.getSelectionObject(qx.dom.Node.getDocument(node)).toString();
        };
      }
    }),
    /**
     * Returns the length of the selection
     *
     * @signature function(node)
     * @param node {Node} Form node or document/window to check.
     * @return {Integer|null} length of the selection or null
     */
    getLength : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        var selectedValue = this.get(node);
        // get the selected part and split it by linebreaks
        var split = qx.util.StringSplit.split(selectedValue, /\r\n/);
        // return the length substracted by the count of linebreaks
        // legacy IE counts linebreaks as two chars
        // -> harmonize this to one char per linebreak
        return selectedValue.length - (split.length - 1);
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") == "opera"){

          var selectedValue,selectedLength,split;
          if(this.__isInputOrTextarea(node)){

            var start = node.selectionStart;
            var end = node.selectionEnd;
            selectedValue = node.value.substring(start, end);
            selectedLength = end - start;
          } else {

            selectedValue = qx.bom.Selection.get(node);
            selectedLength = selectedValue.length;
          };
          // get the selected part and split it by linebreaks
          split = qx.util.StringSplit.split(selectedValue, /\r\n/);
          // substract the count of linebreaks
          // Opera counts each linebreak as two chars
          // -> harmonize this to one char per linebreak
          return selectedLength - (split.length - 1);
        };
        // suitable for gecko and webkit
        if(this.__isInputOrTextarea(node)){

          return node.selectionEnd - node.selectionStart;
        } else {

          return this.get(node).length;
        };
      }
    }),
    /**
     * Returns the start of the selection
     *
     * @signature function(node)
     * @param node {Node} node to check for
     * @return {Integer} start of current selection or "-1" if the current
     *                   selection is not within the given node
     */
    getStart : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        if(this.__isInputOrTextarea(node)){

          var documentRange = qx.bom.Range.get();
          // Check if the document.selection is the text range inside the input element
          if(!node.contains(documentRange.parentElement())){

            return -1;
          };
          var range = qx.bom.Range.get(node);
          var len = node.value.length;
          // Synchronize range start and end points
          range.moveToBookmark(documentRange.getBookmark());
          range.moveEnd('character', len);
          return len - range.text.length;
        } else {

          var range = qx.bom.Range.get(node);
          var parentElement = range.parentElement();
          // get a range which holds the text of the parent element
          var elementRange = qx.bom.Range.get();
          try{

            // IE throws an invalid argument error when the document has no selection
            elementRange.moveToElementText(parentElement);
          } catch(ex) {

            return 0;
          };
          // Move end points of full range so it starts at the user selection
          // and ends at the end of the element text.
          var bodyRange = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
          bodyRange.setEndPoint("StartToStart", range);
          bodyRange.setEndPoint("EndToEnd", elementRange);
          // selection is at beginning
          if(elementRange.compareEndPoints("StartToStart", bodyRange) == 0){

            return 0;
          };
          var moved;
          var steps = 0;
          while(true){

            moved = bodyRange.moveStart("character", -1);
            // Starting points of both ranges are equal
            if(elementRange.compareEndPoints("StartToStart", bodyRange) == 0){

              break;
            };
            // Moving had no effect -> range is at begin of body
            if(moved == 0){

              break;
            } else {

              steps++;
            };
          };
          return ++steps;
        };
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") === "gecko" || qx.core.Environment.get("engine.name") === "webkit"){

          if(this.__isInputOrTextarea(node)){

            return node.selectionStart;
          } else {

            var documentElement = qx.dom.Node.getDocument(node);
            var documentSelection = this.getSelectionObject(documentElement);
            // gecko and webkit do differ how the user selected the text
            // "left-to-right" or "right-to-left"
            if(documentSelection.anchorOffset < documentSelection.focusOffset){

              return documentSelection.anchorOffset;
            } else {

              return documentSelection.focusOffset;
            };
          };
        };
        if(this.__isInputOrTextarea(node)){

          return node.selectionStart;
        } else {

          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).anchorOffset;
        };
      }
    }),
    /**
     * Returns the end of the selection
     *
     * @signature function(node)
     * @param node {Node} node to check
     * @return {Integer} end of current selection
     */
    getEnd : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        if(this.__isInputOrTextarea(node)){

          var documentRange = qx.bom.Range.get();
          // Check if the document.selection is the text range inside the input element
          if(!node.contains(documentRange.parentElement())){

            return -1;
          };
          var range = qx.bom.Range.get(node);
          var len = node.value.length;
          // Synchronize range start and end points
          range.moveToBookmark(documentRange.getBookmark());
          range.moveStart('character', -len);
          return range.text.length;
        } else {

          var range = qx.bom.Range.get(node);
          var parentElement = range.parentElement();
          // get a range which holds the text of the parent element
          var elementRange = qx.bom.Range.get();
          try{

            // IE throws an invalid argument error when the document has no selection
            elementRange.moveToElementText(parentElement);
          } catch(ex) {

            return 0;
          };
          var len = elementRange.text.length;
          // Move end points of full range so it ends at the user selection
          // and starts at the start of the element text.
          var bodyRange = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
          bodyRange.setEndPoint("EndToEnd", range);
          bodyRange.setEndPoint("StartToStart", elementRange);
          // selection is at beginning
          if(elementRange.compareEndPoints("EndToEnd", bodyRange) == 0){

            return len - 1;
          };
          var moved;
          var steps = 0;
          while(true){

            moved = bodyRange.moveEnd("character", 1);
            // Ending points of both ranges are equal
            if(elementRange.compareEndPoints("EndToEnd", bodyRange) == 0){

              break;
            };
            // Moving had no effect -> range is at begin of body
            if(moved == 0){

              break;
            } else {

              steps++;
            };
          };
          return len - (++steps);
        };
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") === "gecko" || qx.core.Environment.get("engine.name") === "webkit"){

          if(this.__isInputOrTextarea(node)){

            return node.selectionEnd;
          } else {

            var documentElement = qx.dom.Node.getDocument(node);
            var documentSelection = this.getSelectionObject(documentElement);
            // gecko and webkit do differ how the user selected the text
            // "left-to-right" or "right-to-left"
            if(documentSelection.focusOffset > documentSelection.anchorOffset){

              return documentSelection.focusOffset;
            } else {

              return documentSelection.anchorOffset;
            };
          };
        };
        if(this.__isInputOrTextarea(node)){

          return node.selectionEnd;
        } else {

          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).focusOffset;
        };
      }
    }),
    /**
     * Utility method to check for an input or textarea element
     *
     * @param node {Node} node to check
     * @return {Boolean} Whether the given nodt is an input or textarea element
     */
    __isInputOrTextarea : function(node){

      return qx.dom.Node.isElement(node) && (node.nodeName.toLowerCase() == "input" || node.nodeName.toLowerCase() == "textarea");
    },
    /**
     * Sets a selection at the given node with the given start and end.
     * For text nodes, input and textarea elements the start and end parameters
     * set the boundaries at the text.
     * For element nodes the start and end parameters are used to select the
     * childNodes of the given element.
     *
     * @signature function(node, start, end)
     * @param node {Node} node to set the selection at
     * @param start {Integer} start of the selection
     * @param end {Integer} end of the selection
     * @return {Boolean} whether a selection is drawn
     */
    set : qx.core.Environment.select("html.selection", {
      "selection" : function(node, start, end){

        var rng;
        // if the node is the document itself then work on with the body element
        if(qx.dom.Node.isDocument(node)){

          node = node.body;
        };
        if(qx.dom.Node.isElement(node) || qx.dom.Node.isText(node)){

          switch(node.nodeName.toLowerCase()){case "input":case "textarea":case "button":
          if(end === undefined){

            end = node.value.length;
          };
          if(start >= 0 && start <= node.value.length && end >= 0 && end <= node.value.length){

            rng = qx.bom.Range.get(node);
            rng.collapse(true);
            rng.moveStart("character", start);
            rng.moveEnd("character", end - start);
            rng.select();
            return true;
          };
          break;case "#text":
          if(end === undefined){

            end = node.nodeValue.length;
          };
          if(start >= 0 && start <= node.nodeValue.length && end >= 0 && end <= node.nodeValue.length){

            // get a range of the body element
            rng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            // use the parent node -> "moveToElementText" expects an element
            rng.moveToElementText(node.parentNode);
            rng.collapse(true);
            rng.moveStart("character", start);
            rng.moveEnd("character", end - start);
            rng.select();
            return true;
          };
          break;default:
          if(end === undefined){

            end = node.childNodes.length - 1;
          };
          // check start and end -> childNodes
          if(node.childNodes[start] && node.childNodes[end]){

            // get the TextRange of the body element
            // IMPORTANT: only with a range of the body the method "moveElementToText" is available
            rng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            // position it at the given node
            rng.moveToElementText(node.childNodes[start]);
            rng.collapse(true);
            // create helper range
            var newRng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            newRng.moveToElementText(node.childNodes[end]);
            // set the end of the range to the end of the helper range
            rng.setEndPoint("EndToEnd", newRng);
            rng.select();
            return true;
          };};
        };
        return false;
      },
      // suitable for gecko, opera, webkit and mshtml >=9
      "default" : function(node, start, end){

        // special handling for input and textarea elements
        var nodeName = node.nodeName.toLowerCase();
        if(qx.dom.Node.isElement(node) && (nodeName == "input" || nodeName == "textarea")){

          // if "end" is not given set it to the end
          if(end === undefined){

            end = node.value.length;
          };
          // check boundaries
          if(start >= 0 && start <= node.value.length && end >= 0 && end <= node.value.length){

            node.focus();
            node.select();
            node.setSelectionRange(start, end);
            return true;
          };
        } else {

          var validBoundaries = false;
          var sel = qx.dom.Node.getWindow(node).getSelection();
          var rng = qx.bom.Range.get(node);
          // element or text node?
          // for elements nodes the offsets are applied to childNodes
          // for text nodes the offsets are applied to the text content
          if(qx.dom.Node.isText(node)){

            if(end === undefined){

              end = node.length;
            };
            if(start >= 0 && start < node.length && end >= 0 && end <= node.length){

              validBoundaries = true;
            };
          } else if(qx.dom.Node.isElement(node)){

            if(end === undefined){

              end = node.childNodes.length - 1;
            };
            if(start >= 0 && node.childNodes[start] && end >= 0 && node.childNodes[end]){

              validBoundaries = true;
            };
          } else if(qx.dom.Node.isDocument(node)){

            // work on with the body element
            node = node.body;
            if(end === undefined){

              end = node.childNodes.length - 1;
            };
            if(start >= 0 && node.childNodes[start] && end >= 0 && node.childNodes[end]){

              validBoundaries = true;
            };
          };;
          if(validBoundaries){

            // collapse the selection if needed
            if(!sel.isCollapsed){

              sel.collapseToStart();
            };
            // set start and end of the range
            rng.setStart(node, start);
            // for element nodes set the end after the childNode
            if(qx.dom.Node.isText(node)){

              rng.setEnd(node, end);
            } else {

              rng.setEndAfter(node.childNodes[end]);
            };
            // remove all existing ranges and add the new one
            if(sel.rangeCount > 0){

              sel.removeAllRanges();
            };
            sel.addRange(rng);
            return true;
          };
        };
        return false;
      }
    }),
    /**
     * Selects all content/childNodes of the given node
     *
     * @param node {Node} text, element or document node
     * @return {Boolean} whether a selection is drawn
     */
    setAll : function(node){

      return qx.bom.Selection.set(node, 0);
    },
    /**
     * Clears the selection on the given node.
     *
     * @param node {Node} node to clear the selection for
     */
    clear : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        var sel = qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node));
        var rng = qx.bom.Range.get(node);
        var parent = rng.parentElement();
        var documentRange = qx.bom.Range.get(qx.dom.Node.getDocument(node));
        // only collapse if the selection is really on the given node
        // -> compare the two parent elements of the ranges with each other and
        // the given node
        if(parent == documentRange.parentElement() && parent == node){

          sel.empty();
        };
      },
      "default" : function(node){

        var sel = qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node));
        var nodeName = node.nodeName.toLowerCase();
        // if the node is an input or textarea element use the specialized methods
        if(qx.dom.Node.isElement(node) && (nodeName == "input" || nodeName == "textarea")){

          node.setSelectionRange(0, 0);
          if(qx.bom.Element && qx.bom.Element.blur){

            qx.bom.Element.blur(node);
          };
        } else if(qx.dom.Node.isDocument(node) || nodeName == "body"){

          sel.collapse(node.body ? node.body : node, 0);
        } else {

          var rng = qx.bom.Range.get(node);
          if(!rng.collapsed){

            var compareNode;
            var commonAncestor = rng.commonAncestorContainer;
            // compare the parentNode of the textNode with the given node
            // (if this node is an element) to decide whether the selection
            // is cleared or not.
            if(qx.dom.Node.isElement(node) && qx.dom.Node.isText(commonAncestor)){

              compareNode = commonAncestor.parentNode;
            } else {

              compareNode = commonAncestor;
            };
            if(compareNode == node){

              sel.collapse(node, 0);
            };
          };
        };
      }
    })
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
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * Low-level Range API which is used together with the low-level Selection API.
 * This is especially useful whenever a developer want to work on text level,
 * e.g. for an editor.
 */
qx.Bootstrap.define("qx.bom.Range", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Returns the range object of the given node.
     *
     * @signature function(node)
     * @param node {Node} node to get the range of
     * @return {Range} valid range of given selection
     */
    get : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        // check for the type of the given node
        // for legacy IE the nodes input, textarea, button and body
        // have access to own TextRange objects. Everything else is
        // gathered via the selection object.
        if(qx.dom.Node.isElement(node)){

          switch(node.nodeName.toLowerCase()){case "input":
          switch(node.type){case "text":case "password":case "hidden":case "button":case "reset":case "file":case "submit":
          return node.createTextRange();default:
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();};
          break;case "textarea":case "body":case "button":
          return node.createTextRange();default:
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();};
        } else {

          if(node == null){

            node = window;
          };
          // need to pass the document node to work with multi-documents
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();
        };
      },
      // suitable for gecko, opera and webkit
      "default" : function(node){

        var doc = qx.dom.Node.getDocument(node);
        // get the selection object of the corresponding document
        var sel = qx.bom.Selection.getSelectionObject(doc);
        if(sel.rangeCount > 0){

          return sel.getRangeAt(0);
        } else {

          return doc.createRange();
        };
      }
    })
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
     * Sebastian Werner (wpbasti)
     * Adrian Olaru (adrianolaru)

   ======================================================================

   This class contains code based on the following work:

   * Cross-Browser Split
     http://blog.stevenlevithan.com/archives/cross-browser-split
     Version 1.0.1

     Copyright:
       (c) 2006-2007, Steven Levithan <http://stevenlevithan.com>

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

     Authors:
       * Steven Levithan

************************************************************************ */
/**
 * Implements an ECMA-compliant, uniform cross-browser split method
 */
qx.Bootstrap.define("qx.util.StringSplit", {
  statics : {
    /**
     * ECMA-compliant, uniform cross-browser split method
     *
     * @param str {String} Incoming string to split
     * @param separator {RegExp} Specifies the character to use for separating the string.
     *   The separator is treated as a string or a  regular expression. If separator is
     *   omitted, the array returned contains one element consisting of the entire string.
     * @param limit {Integer?} Integer specifying a limit on the number of splits to be found.
     * @return {String[]} split string
     */
    split : function(str, separator, limit){

      // if `separator` is not a regex, use the native `split`
      if(Object.prototype.toString.call(separator) !== "[object RegExp]"){

        return String.prototype.split.call(str, separator, limit);
      };
      var output = [],lastLastIndex = 0,flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""),separator = RegExp(separator.source, flags + "g"),// make `global` and avoid `lastIndex` issues by working with a copy
      separator2,match,lastIndex,lastLength,compliantExecNpcg = /()??/.exec("")[1] === undefined;
      // NPCG: nonparticipating capturing group
      str = str + "";
      // type conversion
      if(!compliantExecNpcg){

        separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags);
      };
      /* behavior for `limit`: if it's...
      - `undefined`: no limit.
      - `NaN` or zero: return an empty array.
      - a positive number: use `Math.floor(limit)`.
      - a negative number: no limit.
      - other: type-convert, then use the above rules. */
      if(limit === undefined || +limit < 0){

        limit = Infinity;
      } else {

        limit = Math.floor(+limit);
        if(!limit){

          return [];
        };
      };
      while(match = separator.exec(str)){

        lastIndex = match.index + match[0].length;
        // `separator.lastIndex` is not reliable cross-browser
        if(lastIndex > lastLastIndex){

          output.push(str.slice(lastLastIndex, match.index));
          // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
          if(!compliantExecNpcg && match.length > 1){

            match[0].replace(separator2, function(){

              for(var i = 1;i < arguments.length - 2;i++){

                if(arguments[i] === undefined){

                  match[i] = undefined;
                };
              };
            });
          };
          if(match.length > 1 && match.index < str.length){

            Array.prototype.push.apply(output, match.slice(1));
          };
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if(output.length >= limit){

            break;
          };
        };
        if(separator.lastIndex === match.index){

          separator.lastIndex++;
        };
      };
      if(lastLastIndex === str.length){

        if(lastLength || !separator.test("")){

          output.push("");
        };
      } else {

        output.push(str.slice(lastLastIndex));
      };
      return output.length > limit ? output.slice(0, limit) : output;
    }
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * @require(qx.module.TextSelection)
 *
 * @group (Widget)
 */
qx.Bootstrap.define("qx.ui.website.Input", {
  extend : qx.ui.website.Widget,
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    // used for webkit only
    __selectable : null,
    __enabled : null,
    /**
     * Set the input element enabled / disabled.
     * Webkit needs a special treatment because the set color of the input
     * field changes automatically. Therefore, we use
     * <code>-webkit-user-modify: read-only</code> and
     * <code>-webkit-user-select: none</code>
     * for disabling the fields in webkit. All other browsers use the disabled
     * attribute.
     *
     * @param value {Boolean} true, if the input element should be enabled.
     * @return {qx.ui.website.Input} The collection for chaining
     */
    setEnabled : function(value){

      this.setAttribute("disabled", value === false);
      if(qxWeb.env.get("engine.name") == "webkit"){

        this.__enabled = value;
        if(!value){

          this.setStyles({
            "userModify" : "read-only",
            "userSelect" : "none"
          });
        } else {

          this.setStyles({
            "userModify" : null,
            "userSelect" : this.__selectable ? null : "none"
          });
        };
      };
      return this;
    },
    /**
     * Set whether the element is selectable. It uses the qooxdoo attribute
     * qxSelectable with the values 'on' or 'off'.
     * In webkit, a special css property will be used and checks for the
     * enabled state.
     *
     * @param value {Boolean} True, if the element should be selectable.
     * @return {qx.ui.website.Input} The collection for chaining
     */
    setSelectable : function(value){

      if(!this[0]){

        return this;
      };
      var enabled = this.__enabled;
      if(qxWeb.env.get("engine.name") != "webkit"){

        enabled = true;
      } else {

        this.__selectable = value;
      };
      value = enabled && value;
      var contentElement = this.eq(0);
      contentElement.setAttribute("qxSelectable", value ? "on" : "off");
      var userSelect = qx.core.Environment.get("css.userselect");
      if(userSelect){

        contentElement.setStyle(userSelect, value ? "text" : qx.core.Environment.get("css.userselect.none"));
      };
      return this;
    }
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
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * This is a simple rating widget which can be used to display a predefined
 * number of symbols on which the user can click to give a rating e.g.
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
        rating.onWidget("focus", this._onFocus, rating).onWidget("blur", this._onBlur, rating).getChildren("span").addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).onWidget("click", this._onClick, rating);
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

            qxWeb.create("<span>" + this.getConfig("symbol") + "</span>").onWidget("click", el._onClick, el).addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).appendTo(el);
          };
        } else {

          for(var i = 0;i < Math.abs(diff);i++){

            el.getChildren().getLast().offWidget("click", el._onClick, el).remove();
          };
        };
      }.bind(this));
      return this;
    },
    /**
     * Click handler which updates the value depending on the clicked element.
     *
     * @param e {Event} The native click event.
     */
    _onClick : function(e){

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
        rating.offWidget("focus", this._onFocus, rating).offWidget("blur", this._onBlur, rating);
        rating.getChildren("span").offWidget("click", rating._onClick, rating);
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