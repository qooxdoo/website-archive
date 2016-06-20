/** qooxdoo v5.0.1 | (c) 2015 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":true,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"5.0.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v5.0.1 | (c) 2015 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
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

    qxWeb.$attachAll(this, "string");
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
  members : {
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
     * Remove an HTML "data-*" attribute on each item in the collection
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute
     * @return {qxWeb} The collection for chaining
     */
    removeData : function(name){

      this._forEachElement(function(item){

        qx.bom.element.Dataset.remove(item, name);
      });
      return this;
    }
  },
  defer : function(statics){

    qxWeb.$attachAll(this);
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

        if((value === null) || (value == undefined)){

          qx.bom.element.Attribute.reset(element, "data-" + qx.lang.String.hyphenate(name));
        } else {

          qx.bom.element.Attribute.set(element, "data-" + qx.lang.String.hyphenate(name), value);
        };
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
     *
     * @signature function ()
     * @return {Object} Any valid native event target
     */
    getTarget : function(){
    },
    /**
     * Computes the related target from the native DOM event
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
     * @return {qx.ui.website.Widget} A widget.
     *
     * @attach {qxWeb}
     */
    widget : function(){

      var widget = new qx.ui.website.Widget(this);
      widget.init();
      return widget;
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
    },
    /**
     * Returns a wrapper Array that maps the widget API available on
     * the first item in the current collection to all items in the
     * collection.
     *
     * @attach {qxWeb}
     * @return {qxWeb[]} Collection of widgets
     */
    toWidgetCollection : function(){

      var args = this.toArray().map(function(el){

        return qxWeb(el);
      });
      // Set the context for the 'bind' call (will be replaced by new)
      Array.prototype.unshift.call(args, null);
      // Create temporary constructor with bound arguments
      var Temp = qx.core.Wrapper.bind.apply(qx.core.Wrapper, args);
      return new Temp();
    }
  },
  construct : function(selector, context){

    var col = this.base(arguments, selector, context);
    if(col.length > 1){

      throw new Error("The collection must not contain more than one element.");
    };
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
      this[0].$widget = this;
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

      if(!this["$$storage_" + type]){

        this["$$storage_" + type] = {
        };
      };
      this["$$storage_" + type][name] = data;
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

      var storage = this["$$storage_" + type];
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
      this[0].$widget = null;
      return qxWeb.$init(this, qxWeb);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      widget : statics.widget,
      toWidgetCollection : statics.toWidgetCollection
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
     2014-2015 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */
/**
 * Generic wrapper instance which wrapps a set of objects and forwards the API of
 * the first object to all objects in the array.
 */
qx.Bootstrap.define("qx.core.Wrapper", {
  extend : Array,
  construct : function(){

    for(var i = 0,l = arguments.length;i < l;i++){

      this.push(arguments[i]);
    };
    var firstItem = arguments[0];
    for(var name in firstItem){

      if(this[name] !== undefined){

        continue;
      };
      if(firstItem[name] instanceof Function){

        this[name] = function(name){

          var firstReturnValue;
          var args = Array.prototype.slice.call(arguments, 0);
          args.shift();
          this.forEach(function(item){

            var returnValue = item[name].apply(item, args);
            if(firstReturnValue === undefined){

              firstReturnValue = returnValue;
            };
          });
          // return the collection if the return value was the collection
          if(firstReturnValue === this[0]){

            return this;
          };
          return firstReturnValue;
        }.bind(this, name);
      } else {

        Object.defineProperty(this, name, {
          enumerable : true,
          get : function(name){

            return this[name];
          }.bind(firstItem, name),
          set : function(name, value){

            this.forEach(function(item){

              item[name] = value;
            });
          }.bind(this, name)
        });
      };
    };
  }
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
    __mediaQueryListener : null,
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var mediaQuery = this.getConfig("mediaQuery");
      if(mediaQuery){

        this.setConfig("orientation", this._initMediaQueryListener(mediaQuery));
      };
      var orientation = this.getConfig("orientation");
      this.addClasses([this.getCssPrefix(), this.getCssPrefix() + "-" + orientation, "qx-flex-ready"]);
      if(this.getChildren("ul").length === 0){

        var list = qxWeb.create("<ul/>");
        var content = this.getChildren();
        if(content.length > 0){

          list.insertBefore(content.eq(0));
        } else {

          this.append(list);
        };
      };
      var container = this.find("> ." + this.getCssPrefix() + "-container");
      var buttons = this.getChildren("ul").getFirst().getChildren("li").not("." + this.getCssPrefix() + "-page");
      buttons._forEachElementWrapped(function(button){

        button.addClass(this.getCssPrefix() + "-button");
        var pageSelector = button.getData(this.getCssPrefix() + "-page");
        if(!pageSelector){

          return;
        };
        button.addClass(this.getCssPrefix() + "-button").on("tap", this._onTap, this);
        var page = this._getPage(button);
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

              container = qxWeb.create("<div class='" + this.getCssPrefix() + "-container'>").insertAfter(this.find("> ul")[0]);
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

          this.find("> ul").append(buttons[i]);
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
      this.getChildren("ul").getFirst().on("keydown", this._onKeyDown, this);
      if(orientation === "horizontal"){

        this._applyAlignment(this);
      };
      qxWeb(window).on("resize", this._onResize, this);
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

      var mql = this.__mediaQueryListener;
      if(!mql){

        mql = q.matchMedia(mediaQuery);
        this.__mediaQueryListener = mql;
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

      this.removeClass(this.getCssPrefix() + "-vertical").addClasses([this.getCssPrefix() + "", this.getCssPrefix() + "-horizontal"]).find("> ul").addClass("qx-hbox");
      var container = this.find("> ." + this.getCssPrefix() + "-container");
      if(container.length == 0){

        container = qxWeb.create("<div class='" + this.getCssPrefix() + "-container'>").insertAfter(this.find("> ul")[0]);
      };
      var selectedPage;
      this.find("> ul > ." + this.getCssPrefix() + "-button")._forEachElementWrapped(function(li){

        var page = this.find(li.getData(this.getCssPrefix() + "-page"));
        if(q.getNodeName(page[0]) == "li"){

          var div = q.create("<div>").addClass(this.getCssPrefix() + "-page").setAttribute("id", page.getAttribute("id"));
          page.remove().getChildren().appendTo(div);
          page = div;
        };
        page.appendTo(container[0]);
        this._switchPages(page, null);
        if(li.hasClass(this.getCssPrefix() + "-button-active")){

          selectedPage = page;
        };
      }.bind(this));
      if(!selectedPage){

        var firstButton = this.find("> ul > ." + this.getCssPrefix() + "-button").eq(0).addClass(this.getCssPrefix() + "-button-active");
        selectedPage = this._getPage(firstButton);
      };
      this._switchPages(null, selectedPage);
      this._applyAlignment(this);
      this.setEnabled(this.getEnabled());
      return this;
    },
    /**
     * Render the widget in vertical mode
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    _renderVertical : function(){

      this.find("> ul.qx-hbox").removeClass("qx-hbox");
      this.removeClasses([this.getCssPrefix() + "-horizontal"]).addClasses([this.getCssPrefix() + "", this.getCssPrefix() + "-vertical"]).getChildren("ul").getFirst().getChildren("li").not("." + this.getCssPrefix() + "-page")._forEachElementWrapped(function(button){

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

      var link = qxWeb.create(qxWeb.template.render(this.getTemplate("button"), {
        content : label
      })).addClass(this.getCssPrefix() + "-button");
      var list = this.find("> ul");
      var links = list.getChildren("li");
      if(list.hasClass(this.getCssPrefix() + "-right") && links.length > 0){

        link.insertBefore(links.getFirst());
      } else {

        link.appendTo(list);
      };
      link.on("tap", this._onTap, this).addClass(this.getCssPrefix() + "-button");
      if(this.find("> ul ." + this.getCssPrefix() + "-button").length === 1){

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
      return this;
    },
    /**
     * Selects a tab button
     *
     * @param index {Integer} index of the button to select
     * @return {qx.ui.website.Tabs} The collection for chaining
     */
    select : function(index){

      var buttons = this.find("> ul > ." + this.getCssPrefix() + "-button");
      var oldButton = this.find("> ul > ." + this.getCssPrefix() + "-button-active").removeClass(this.getCssPrefix() + "-button-active");
      if(this.getConfig("align") == "right"){

        index = buttons.length - 1 - index;
      };
      var newButton = buttons.eq(index).addClass(this.getCssPrefix() + "-button-active");
      this._showPage(newButton, oldButton);
      this.emit("changeSelected", index);
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
      var oldButton = this.find("> ul > ." + this.getCssPrefix() + "-button-active");
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
      var buttons = this.find("> ul > ." + this.getCssPrefix() + "-button")._forEachElementWrapped(function(button){

        if(tappedButton === button[0]){

          newButton = button;
        };
      });
      this._showPage(newButton, oldButton);
      newButton.addClass(this.getCssPrefix() + "-button-active");
      var index = buttons.indexOf(newButton[0]);
      if(this.getConfig("align") == "right"){

        index = buttons.length - 1 - index;
      };
      this.emit("changeSelected", index);
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
      return this.find(pageSelector);
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

        tabs.find("> ul").addClass("qx-hbox");
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

      this.__mediaQueryListener = undefined;
      var cssPrefix = this.getCssPrefix();
      qxWeb(window).off("resize", this._onResize, this);
      this.find("> ul > ." + this.getCssPrefix() + "-button").off("tap", this._onTap, this);
      this.getChildren("ul").getFirst().off("keydown", this._onKeyDown, this).setHtml("");
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

    qxWeb.$attachAll(this, "object");
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
     * *button*
     *
     * Template used by {@link qx.ui.website.Tabs#addButton} to create a new button.
     *
     * Default value: <pre><li><button>{{{content}}}</button></li></pre>
     */
    _templates : {
      button : "<li><button>{{{content}}}</button></li>"
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

    qxWeb.$attachAll(this, "type");
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
  members : {
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

    qxWeb.$attachAll(this);
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
    _value : 0,
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var cssPrefix = this.getCssPrefix();
      if(!this.getValue()){

        var step = this.getConfig("step");
        var defaultVal = qxWeb.type.get(step) == "Array" ? step[0] : this.getConfig("minimum");
        this._value = defaultVal;
      };
      this.on("pointerup", this._onSliderPointerUp, this).on("focus", this._onSliderFocus, this).setStyle("touch-action", "pan-y");
      qxWeb(document).on("pointerup", this._onDocPointerUp, this);
      qxWeb(window).on("resize", this._onWindowResize, this);
      if(this.getChildren("." + cssPrefix + "-knob").length === 0){

        this.append(qx.ui.website.Widget.create("<button>").addClass(cssPrefix + "-knob"));
      };
      this.getChildren("." + cssPrefix + "-knob").setAttributes({
        "draggable" : "false",
        "unselectable" : "true"
      }).setHtml(this._getKnobContent()).on("pointerdown", this._onPointerDown, this).on("dragstart", this._onDragStart, this).on("focus", this._onKnobFocus, this).on("blur", this._onKnobBlur, this);
      this.render();
      return true;
    },
    /**
     * Returns the current value of the slider
     *
     * @return {Integer} slider value
     */
    getValue : function(){

      return this._value;
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
      this._value = value;
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

      this.getChildren("." + this.getCssPrefix() + "-knob").on("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the event listener for keyboard support from the knob on blur
     * @param e {Event} blur event
     */
    _onKnobBlur : function(e){

      this.getChildren("." + this.getCssPrefix() + "-knob").off("keydown", this._onKeyDown, this);
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

      if(qxWeb.type.get(this.getConfig("step")) == "Array"){

        this._getPixels();
      };
      this.__valueToPosition(this._value);
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

      qxWeb(document).off("pointerup", this._onDocPointerUp, this);
      qxWeb(window).off("resize", this._onWindowResize, this);
      this.off("pointerup", this._onSliderPointerUp, this).off("focus", this._onSliderFocus, this);
      this.getChildren("." + this.getCssPrefix() + "-knob").off("pointerdown", this._onPointerDown, this).off("dragstart", this._onDragStart, this).off("focus", this._onKnobFocus, this).off("blur", this._onKnobBlur, this).off("keydown", this._onKeyDown, this);
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
      if(this.getChildren("span") == 0){

        qxWeb.create("<span>").appendTo(this);
      };
      if(this.getChildren("img") == 0){

        qxWeb.create("<img>").appendTo(this).setStyle("display", "none");
      };
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
      table.__model = model;
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
    __model : null,
    __columnMeta : null,
    __sortingFunction : null,
    __filterFunction : null,
    __filterFunc : null,
    __filters : null,
    __inputName : null,
    __hovered : null,
    __sortingData : null,
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      var model = this.__model;
      if(qxWeb.getNodeName(this).toUpperCase() !== "TABLE"){

        throw new Error("collection should contains only table elements !!");
      };
      if(!this[0].tHead){

        throw new Error("A Table header element is required for this widget.");
      };
      this.find("tbody td").addClass("qx-table-cell");
      this.__inputName = "input" + qx.ui.website.Table.__getUID();
      this.__getColumnMetaData(model);
      this.setModel(model);
      this.setSortingFunction(this.__defaultColumnSort);
      this.__registerEvents();
      this.__hovered = null;
      return true;
    },
    /**
     * Sets the given model to the widgets in the collection
     *
     * @param model {Array} The model to be set
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setModel : function(model){

      if(typeof model != "undefined"){

        if(qx.lang.Type.isArray(model)){

          this.__model = model;
          this.emit("modelChange", model);
        } else {

          throw new Error("model must be an Array !!");
        };
      };
      return this;
    },
    /**
     * Set the column types for the table widgets in the collection
     * @param columnName {String} The column name
     * @param type {String} The type of the column
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setColumnType : function(columnName, type){

      this.__checkColumnExistance(columnName);
      this.__columnMeta[columnName].type = type;
      return this;
    },
    /**
     * Returns the type of the specified column
     * @param columnName {String} The column name
     * @return {String} The type of the specified column
     */
    getColumnType : function(columnName){

      this.eq(0).__checkColumnExistance(columnName);
      return this.eq(0).__columnMeta[columnName].type;
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
      this.setProperty(["_compare" + type], compareFunc);
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
      this.setProperty(["_compare" + type], compareFunc);
      return this;
    },
    /**
     * Returns the comparison function for the given type
     * @param type {String} The type to get the comparison function for
     * @return {Function} The comparison function
     */
    getCompareFunction : function(type){

      type = qxWeb.string.firstUp(type);
      return this.getProperty("_compare" + type) || this["_compare" + type];
    },
    /**
     * Set the function that control the sorting process
     * @param func {Function} The sorting function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setSortingFunction : function(func){

      func = func || function(){
      };
      this.__sortingFunction = func;
      return this;
    },
    /**
     * Unset the function that control the sorting process
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    unsetSortingFunction : function(){

      this.__sortingFunction = this.__defaultColumnSort;
      return this;
    },
    /**
     * Set the function that will be used to process the column filtering
     * @param func {Function} The filter function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    setFilterFunction : function(func){

      this.__filterFunction = func;
      return this;
    },
    /**
     * Unset the filter function
     * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
     */
    unsetFilterFunction : function(){

      this.__filterFunction = this.__defaultColumnFilter;
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

      this.__checkColumnExistance(columnName);
      if(!this.__filterFunc){

        this.__filterFunc = {
        };
      };
      this.__filterFunc[columnName] = func;
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

      if(this.__filterFunc){

        return this.__filterFunc[columnName];
      };
      return null;
    },
    /**
    * Set the filter function to use to filter the table rows
    * @param func {Function} The filter
    * @return {qx.ui.website.Table} <code>this</code> reference for chaining.
    */
    setRowFilter : function(func){

      if(!this.__filterFunc){

        this.__filterFunc = {
        };
      };
      this.__filterFunc.row = func;
      return this;
    },
    /**
    * Returns the filter function set on a specific column
    * @return {Function} The filter function
    *
    */
    getRowFilter : function(){

      if(this.__filterFunc){

        return this.__filterFunc.row;
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
      this.setSortingClass(columnName, dir);
      this.__sortDOM(this.__sort(columnName, dir));
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
      if(!this.__filters){

        this.__filters = {
        };
      };
      if(this.__filters[columnName]){

        this.__filters[columnName].keyword = keyword;
        this.__getRoot().appendChild(this.__filters[columnName].rows);
      } else {

        this.__filters[columnName] = {
          keyword : keyword,
          rows : document.createDocumentFragment()
        };
      };
      this.__filterDom(keyword, columnName);
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
      filters = this.__filters;
      if(filters){

        if(columnName){

          this.__getRoot().appendChild(filters[columnName].rows);
        } else {

          for(var col in filters){

            this.__getRoot().appendChild(filters[col].rows);
          };
        };
      };
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
          cell : colIndex > -1 ? qxWeb(rows[i].cells.item(colIndex)) : null,
          row : qxWeb(rows[i]),
          keyword : keyword
        };
        if(!filterFunc.bind(this)(data)){

          this.__filters[columnName].rows.appendChild(rows[i]);
        };
      };
      return this;
    },
    /**
     * Get the current column sorting information for the first widget in the collection
     * @return {Map} The map containing the current sorting information
     */
    getSortingData : function(){

      return this.__sortingData;
    },
    //overriden
    render : function(){

      var sortingData = this.getSortingData();
      var rowSelection = this.getConfig("rowSelection");
      this.__applyTemplate(this.__model);
      if(qx.ui.website.Table.__selectionTypes.indexOf(rowSelection) != -1){

        this.__processSelectionInputs(rowSelection);
      };
      if(sortingData){

        this.__sortDOM(this.__sort(sortingData.columnName, sortingData.direction));
      };
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
      var inputName = this.__inputName;
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

      var data = this.__columnMeta;
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
      this.__columnMeta = data;
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

          this.__sortingFunction.bind(this)(data);
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
      var hovered = this.__hovered;
      if(!cell.hasClass("qx-table-cell") && !cell.hasClass("qx-table-header")){

        cell = cell.getClosest(".qx-table-cell, .qx-table-header");
      };
      if(cell && (cell.length > 0) && ((hovered && (hovered.cell[0] != cell[0])) || (!hovered)) && !cell.hasClass("qx-table-row-selection")){

        if(hovered){

          this.emit("cellOut", hovered);
        };
        this.__hovered = this.__fireEvent("cellHover", cell, target);
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
      if(this.__hovered){

        if(!cell.isChildOf(this)){

          this.emit("cellOut", this.__hovered);
          this.__hovered = null;
        } else {

          if(!cell.hasClass("qx-table-cell") && !cell.hasClass("qx-table-header")){

            cell = cell.getClosest(".qx-table-cell, .qx-table-header");
            if(cell.hasClass("qx-table-row-selection")){

              this.emit("cellOut", this.__hovered);
              this.__hovered = null;
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

      return this.__columnMeta[columName];
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
      this.__sortingData = data;
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

      return cell[0].textContent || cell[0].innerText || "";
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
 *       <td><code>qx-calendar-previous-month</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles calendar cells for days from the previous month</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-next-month</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles calendar cells for days from the next month</td>
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
 *     <tr>
 *       <td><code>qx-calendar-today</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles the cell containing the current day button</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-calendar-past</code></td>
 *       <td>Day cell (<code>td</code>)</td>
 *       <td>Identifies and styles all cells containing day buttons in the past</td>
 *     </tr>
 *     <tr>
 *       <td><code>qx-hidden</code></td>
 *       <td>Day (<code>button</code>)</td>
 *       <td>Added to days of previous / next month if the configuration <code>hideDaysOtherMonth</code>
             is set to <code>true</code> <br /> The default style property used is <code>visibility: hidden</code>
         </td>
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
     *     <button class='{{cssPrefix}}-day {{hidden}}' value='{{date}}'>{{day}}</button>
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
      row : "<tr>" + "{{#row}}<td class='{{cssClass}}'><button class='{{cssPrefix}}-day {{hidden}}' {{disabled}} value='{{date}}'>{{day}}</button></td>{{/row}}" + "</tr>",
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
     *
     * *hideDaysOtherMonth*
     *
     * Hide all days of the previous/next month. If the entire last row of the calandar are days of
     * the next month the whole row is not rendered. Default: <code>false</code> <br /> <br />
     * <strong>Important: </strong>If you like to have a <em>mixed</em> mode like displaying the days
     * of the previous month and hiding the days of the next month you should work with the
     * <code>rendered</code> event to manipulate the DOM nodes after the rendering. Take a look at
     * the samples to get a idea of it.
     *
     * *disableDaysOtherMonth*
     *
     * Disable all days of the previous/next month. The days are visible, but are not responding to
     * user input. Default: <code>false</code>
     */
    _config : {
      monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dayNames : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      minDate : null,
      maxDate : null,
      selectableWeekDays : [0, 1, 2, 3, 4, 5, 6],
      selectionMode : "single",
      hideDaysOtherMonth : false,
      disableDaysOtherMonth : false
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
    "changeValue" : "Date",
    /** Fired whenvever a render process finished. This event can be used as hook to add
        custom markup and/or manipulate existing. */
    "rendered" : ""
  },
  members : {
    __range : null,
    _value : null,
    _shownValue : null,
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      this.__range = [];
      var today = new Date();
      today = this._getNormalizedDate(today);
      this.showValue(today);
      return true;
    },
    // overridden
    render : function(){

      var minDate = this.getConfig("minDate");
      if(minDate){

        minDate = this._getNormalizedDate(minDate);
      };
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        maxDate = this._getNormalizedDate(maxDate);
      };
      this.showValue(this._shownValue);
      return this;
    },
    // overridden
    setEnabled : function(value){

      this.setAttribute("disabled", !value);
      if(value === true){

        // let the render process decide which state to set for the different DOM elements
        // this highly depends on the configuration (e.g. 'minDate', 'maxDate' or 'disableDaysOtherMonth')
        this.render();
      } else {

        this.find("*").setAttribute("disabled", !value);
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

        value = this._getNormalizedDate(value);
        if(this.getConfig("selectableWeekDays").indexOf(value.getDay()) == -1){

          throw new Error("The given date's week day is not selectable.");
        };
        if(minDate){

          minDate = this._getNormalizedDate(minDate);
          if(value < minDate){

            throw new Error("Given date " + value.toDateString() + " is earlier than configured minDate " + minDate.toDateString());
          };
        };
        if(maxDate){

          maxDate = this._getNormalizedDate(maxDate);
          if(value > maxDate){

            throw new Error("Given date " + value.toDateString() + " is later than configured maxDate " + maxDate.toDateString());
          };
        };
      } else if(this.getConfig("selectionMode") == "range"){

        if(!this.__range){

          this.__range = value.map(function(val){

            return val.toDateString();
          });
        };
        if(value.length == 2){

          value.sort(function(a, b){

            return a - b;
          });
          value = this._generateRange(value);
        } else {

          value[0] = this._getNormalizedDate(value[0]);
        };
      };
      this._value = value;
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

      var value = this._value;
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
      this._shownValue = value;
      var cssPrefix = this.getCssPrefix();
      if(this.getAttribute("tabindex") < 0){

        this.setAttribute("tabindex", 0);
      };
      this.find("." + cssPrefix + "-prev").off("tap", this._prevMonth, this);
      this.find("." + cssPrefix + "-next").off("tap", this._nextMonth, this);
      this.find("." + cssPrefix + "-day").off("tap", this._selectDay, this);
      this.off("focus", this._onFocus, this, true).off("blur", this._onBlur, this, true);
      this.setHtml(this._getTable(value));
      this.find("." + cssPrefix + "-prev").on("tap", this._prevMonth, this);
      this.find("." + cssPrefix + "-next").on("tap", this._nextMonth, this);
      this.find("td").not(".qx-calendar-invalid").find("." + cssPrefix + "-day").on("tap", this._selectDay, this);
      this.on("focus", this._onFocus, this, true).on("blur", this._onBlur, this, true);
      // signal the rendering process is done - this is useful for application developers if they
      // want to hook into and change / adapt the DOM elements of the calendar
      this.emit('rendered');
      return this;
    },
    /**
     * Displays the previous month
     */
    _prevMonth : function(){

      var shownValue = this._shownValue;
      this.showValue(new Date(shownValue.getFullYear(), shownValue.getMonth() - 1));
    },
    /**
     * Displays the next month
     */
    _nextMonth : function(){

      var shownValue = this._shownValue;
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

        var range = this.__range.slice(0);
        if(range.length == 2){

          range = [];
        };
        range.push(newStr);
        this.__range = range;
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

        minDate = this._getNormalizedDate(minDate);
        if(date.getMonth() <= minDate.getMonth()){

          prevDisabled = "disabled";
        };
      };
      var nextDisabled = "";
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        maxDate = this._getNormalizedDate(maxDate);
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

        minDate = this._getNormalizedDate(minDate);
      };
      var maxDate = this.getConfig("maxDate");
      if(maxDate){

        this._getNormalizedDate(maxDate);
      };
      var hideDaysOtherMonth = this.getConfig("hideDaysOtherMonth");
      var disableDaysOtherMonth = this.getConfig("disableDaysOtherMonth");
      if(qx.Bootstrap.isArray(this._value)){

        valueString = this._value.map(function(currentDate){

          return currentDate.toDateString();
        });
      };
      for(var week = 0;week < 6;week++){

        var data = {
          row : []
        };
        for(var i = 0;i < 7;i++){

          var cssClasses = "";
          var hidden = "";
          var disabled = "";
          if(helpDate.getMonth() !== date.getMonth()){

            // first day of the last displayed week is already in the next month
            if(hideDaysOtherMonth === true && week === 5 && i === 0){

              break;
            };
            // set 'previous-month' and 'next-month' to make it easier for the developer to select
            // the days after the render process
            if((helpDate.getMonth() < date.getMonth() && helpDate.getFullYear() == date.getFullYear()) || (helpDate.getMonth() > date.getMonth() && helpDate.getFullYear() < date.getFullYear())){

              cssClasses += cssPrefix + "-previous-month";
            } else {

              cssClasses += cssPrefix + "-next-month";
            };
            hidden += hideDaysOtherMonth ? "qx-hidden" : "";
            disabled += disableDaysOtherMonth ? "disabled=disabled" : "";
          };
          if((this.getConfig("selectionMode") == "range") && qx.Bootstrap.isArray(this._value)){

            if(valueString.indexOf(helpDate.toDateString()) != -1){

              cssClasses += " " + cssPrefix + "-selected";
            };
          } else {

            var range = this.__range;
            if(this._value){

              value = this.getConfig("selectionMode") == "range" ? new Date(range[range.length - 1]) : this._value;
              cssClasses += helpDate.toDateString() === value.toDateString() ? " " + cssPrefix + "-selected" : "";
            };
          };
          // extra check for today date necessary - otherwise 'today' would be marked as past day
          var isPast = Date.parse(today) > Date.parse(helpDate) && today.toDateString() !== helpDate.toDateString();
          cssClasses += isPast ? " " + cssPrefix + "-past" : "";
          cssClasses += today.toDateString() === helpDate.toDateString() ? " " + cssPrefix + "-today" : "";
          // if 'disableDaysOtherMonth' config is set - 'disabled' might already be set
          if(disabled === ""){

            disabled = this.getEnabled() ? "" : "disabled=disabled";
            if((minDate && helpDate < minDate) || (maxDate && helpDate > maxDate) || this.getConfig("selectableWeekDays").indexOf(helpDate.getDay()) == -1){

              disabled = "disabled=disabled";
            };
          };
          cssClasses += (helpDate.getDay() === 0 || helpDate.getDay() === 6) ? " " + cssPrefix + "-weekend" : " " + cssPrefix + "-weekday";
          data.row.push({
            day : helpDate.getDate(),
            date : helpDate.toDateString(),
            cssPrefix : cssPrefix,
            cssClass : cssClasses,
            disabled : disabled,
            hidden : hidden
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
     * Returns a Date object with hours, minutes and seconds set to 0
     * to facilitate date comparisons.
     *
     * @param dateIn {Date} Date to normalize
     * @return {Date} normalized
     */
    _getNormalizedDate : function(dateIn){

      var date = new Date(dateIn.getTime());
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date;
    },
    /**
     * Attaches the keydown listener.
     *
     * @param e {Event} focus event
     */
    _onFocus : function(e){

      this.on("keydown", this._onKeyDown, this);
    },
    /**
     * Removes the keydown listener if the focus moves outside of the calendar.
     *
     * @param e {Event} blur event
     */
    _onBlur : function(e){

      if(this.contains(e.getRelatedTarget()).length === 0){

        this.off("keydown", this._onKeyDown, this);
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
      minDate = this._getNormalizedDate(minDate);
      maxDate = this._getNormalizedDate(maxDate);
      while(current <= range[1]){

        current = this._getNormalizedDate(current);
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
      this.find("." + cssPrefix + "-prev").off("tap", this._prevMonth, this);
      this.find("." + cssPrefix + "-next").off("tap", this._nextMonth, this);
      this.find("." + cssPrefix + "-day").off("tap", this._selectDay, this);
      this.off("focus", this._onFocus, this, true).off("blur", this._onBlur, this, true).off("keydown", this._onKeyDown, this);
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
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Normalization for the track gesture. This gesture is based on <a href="#Pointer">Pointer events</a>,
 * meaning that it's available on all devices, no matter which input device type is used (e.g. mouse or
 * touchscreen).
 *
 * @require(qx.module.Event)
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.Track", {
  statics : {
    /**
     * List of event types to be normalized
     */
    TYPES : ["track"],
    BIND_METHODS : ["getDelta"],
    /**
     * Returns a map with the calculated delta coordinates and axis,
     * relative to the position on <code>trackstart</code> event.
     *
     * @return {Map} a map with contains the delta as <code>x</code> and
     * <code>y</code> and the movement axis as <code>axis</code>.
     */
    getDelta : function(){

      return this._original.delta;
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
      // apply mouse event normalizations
      var bindMethods = qx.module.event.Track.BIND_METHODS;
      for(var i = 0,l = bindMethods.length;i < l;i++){

        if(typeof event[bindMethods[i]] != "function"){

          event[bindMethods[i]] = qx.module.event.Track[bindMethods[i]].bind(event);
        };
      };
      return event;
    }
  },
  defer : function(statics){

    qxWeb.$registerEventNormalization(qx.module.event.Track.TYPES, statics.normalize);
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
 * Normalization for the swipe gesture. This gesture is based on <a href="#Pointer">Pointer events</a>
 * meaning that it's available on all devices, no matter which input device type is used (e.g. mouse or
 * touchscreen).
 *
 * @require(qx.module.Event)
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.Swipe", {
  statics : {
    /**
     * List of event types to be normalized
     */
    TYPES : ["swipe"],
    BIND_METHODS : ["getStartTime", "getDuration", "getAxis", "getDirection", "getVelocity", "getDistance"],
    /**
     * Returns the start time of the performed swipe.
     *
     * @return {Integer} the start time
     */
    getStartTime : function(){

      return this._original.swipe.startTime;
    },
    /**
     * Returns the duration the performed swipe took.
     *
     * @return {Integer} the duration
     */
    getDuration : function(){

      return this._original.swipe.duration;
    },
    /**
     * Returns whether the performed swipe was on the x or y axis.
     *
     * @return {String} "x"/"y" axis
     */
    getAxis : function(){

      return this._original.swipe.axis;
    },
    /**
     * Returns the direction of the performed swipe in reference to the axis.
     * y = up / down
     * x = left / right
     *
     * @return {String} the direction
     */
    getDirection : function(){

      return this._original.swipe.direction;
    },
    /**
     * Returns the velocity of the performed swipe.
     *
     * @return {Number} the velocity
     */
    getVelocity : function(){

      return this._original.swipe.velocity;
    },
    /**
     * Returns the distance of the performed swipe.
     *
     * @return {Integer} the distance
     */
    getDistance : function(){

      return this._original.swipe.distance;
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
      // apply mouse event normalizations
      var bindMethods = qx.module.event.Swipe.BIND_METHODS;
      for(var i = 0,l = bindMethods.length;i < l;i++){

        if(typeof event[bindMethods[i]] != "function"){

          event[bindMethods[i]] = qx.module.event.Swipe[bindMethods[i]].bind(event);
        };
      };
      return event;
    }
  },
  defer : function(statics){

    qxWeb.$registerEventNormalization(qx.module.event.Swipe.TYPES, statics.normalize);
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
 * Creates a gesture handler that fires high-level events such as "swipe"
 * based on low-level event sequences on the given element
 *
 * @require(qx.module.Event)
 * @require(qx.module.event.PointerHandler)
 *
 * @group (Event_Normalization)
 */
qx.Bootstrap.define("qx.module.event.GestureHandler", {
  statics : {
    TYPES : ["tap", "longtap", "swipe", "dbltap", "track", "trackstart", "trackend", "roll", "rotate", "pinch"],
    /**
     * Creates a gesture handler for the given element when a gesture event listener
     * is attached to it
     *
     * @param element {Element} DOM element
     * @param type {String} event type
     */
    register : function(element, type){

      if(!element.$$gestureHandler){

        if(!qx.core.Environment.get("event.dispatchevent")){

          if(!element.$$emitter){

            element.$$emitter = new qx.event.Emitter();
          };
        };
        element.$$gestureHandler = new qx.event.handler.GestureCore(element, element.$$emitter);
      };
    },
    /**
     * Removes the gesture event handler from the element if there are no more
     * gesture event listeners attached to it
     * @param element {Element} DOM element
     */
    unregister : function(element){

      // check if there are any registered listeners left
      if(element.$$gestureHandler){

        var listeners = element.$$emitter.getListeners();
        for(var type in listeners){

          if(qx.module.event.GestureHandler.TYPES.indexOf(type) !== -1){

            if(listeners[type].length > 0){

              return;
            };
          };
        };
        // no more listeners, get rid of the handler
        element.$$gestureHandler.dispose();
        element.$$gestureHandler = undefined;
      };
    }
  },
  defer : function(statics){

    qxWeb.$registerEventHook(statics.TYPES, statics.register, statics.unregister);
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
     * Christopher Zuendorf (czuendorf)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Listens for (native or synthetic) pointer events and fires events
 * for gestures like "tap" or "swipe"
 */
qx.Bootstrap.define("qx.event.handler.GestureCore", {
  extend : Object,
  statics : {
    TYPES : ["tap", "swipe", "longtap", "dbltap", "track", "trackstart", "trackend", "rotate", "pinch", "roll"],
    GESTURE_EVENTS : ["gesturebegin", "gesturefinish", "gesturemove", "gesturecancel"],
    /** @type {Map} Maximum distance between a pointer-down and pointer-up event, values are configurable */
    TAP_MAX_DISTANCE : {
      "touch" : 40,
      "mouse" : 5,
      "pen" : 20
    },
    // values are educated guesses
    /** @type {Map} Maximum distance between two subsequent taps, values are configurable */
    DOUBLETAP_MAX_DISTANCE : {
      "touch" : 10,
      "mouse" : 4,
      "pen" : 10
    },
    // values are educated guesses
    /** @type {Map} The direction of a swipe relative to the axis */
    SWIPE_DIRECTION : {
      x : ["left", "right"],
      y : ["up", "down"]
    },
    /**
     * @type {Integer} The time delta in milliseconds to fire a long tap event.
     */
    LONGTAP_TIME : 500,
    /**
     * @type {Integer} Maximum time between two tap events that will still trigger a
     * dbltap event.
     */
    DOUBLETAP_TIME : 500,
    /**
     * @type {Integer} Factor which is used for adapting the delta of the mouse wheel
     * event to the roll events,
     */
    ROLL_FACTOR : 18
  },
  /**
   * @param target {Element} DOM Element that should fire gesture events
   * @param emitter {qx.event.Emitter?} Event emitter (used if dispatchEvent
   * is not supported, e.g. in IE8)
   */
  construct : function(target, emitter){

    this.__defaultTarget = target;
    this.__emitter = emitter;
    this.__gesture = {
    };
    this.__lastTap = {
    };
    this.__stopMomentum = {
    };
    this._initObserver();
  },
  members : {
    __defaultTarget : null,
    __emitter : null,
    __gesture : null,
    __eventName : null,
    __primaryTarget : null,
    __isMultiPointerGesture : null,
    __initialAngle : null,
    __lastTap : null,
    __rollImpulseId : null,
    __stopMomentum : null,
    __initialDistance : null,
    /**
     * Register pointer event listeners
     */
    _initObserver : function(){

      qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(gestureType){

        qxWeb(this.__defaultTarget).on(gestureType, this.checkAndFireGesture, this);
      }.bind(this));
      if(qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9){

        qxWeb(this.__defaultTarget).on("dblclick", this._onDblClick, this);
      };
      // list to wheel events
      var data = qx.core.Environment.get("event.mousewheel");
      qxWeb(data.target).on(data.type, this._fireRoll, this);
    },
    /**
     * Remove native pointer event listeners.
     */
    _stopObserver : function(){

      qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function(pointerType){

        qxWeb(this.__defaultTarget).off(pointerType, this.checkAndFireGesture, this);
      }.bind(this));
      if(qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9){

        qxWeb(this.__defaultTarget).off("dblclick", this._onDblClick, this);
      };
      var data = qx.core.Environment.get("event.mousewheel");
      qxWeb(data.target).off(data.type, this._fireRoll, this);
    },
    /**
     * Checks if a gesture was made and fires the gesture event.
     *
     * @param domEvent {Event} DOM event
     * @param type {String ? null} type of the event
     * @param target {Element ? null} event target
     */
    checkAndFireGesture : function(domEvent, type, target){

      if(!type){

        type = domEvent.type;
      };
      if(!target){

        target = qx.bom.Event.getTarget(domEvent);
      };
      if(type == "gesturebegin"){

        this.gestureBegin(domEvent, target);
      } else if(type == "gesturemove"){

        this.gestureMove(domEvent, target);
      } else if(type == "gesturefinish"){

        this.gestureFinish(domEvent, target);
      } else if(type == "gesturecancel"){

        this.gestureCancel(domEvent.pointerId);
      };;;
    },
    /**
     * Helper method for gesture start.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    gestureBegin : function(domEvent, target){

      if(this.__gesture[domEvent.pointerId]){

        this.__stopLongTapTimer(this.__gesture[domEvent.pointerId]);
        delete this.__gesture[domEvent.pointerId];
      };
      /*
        If the dom event's target or one of its ancestors have
        a gesture handler, we don't need to fire the gesture again
        since it bubbles.
       */
      if(this._hasIntermediaryHandler(target)){

        return;
      };
      this.__gesture[domEvent.pointerId] = {
        "startTime" : new Date().getTime(),
        "lastEventTime" : new Date().getTime(),
        "startX" : domEvent.clientX,
        "startY" : domEvent.clientY,
        "clientX" : domEvent.clientX,
        "clientY" : domEvent.clientY,
        "velocityX" : 0,
        "velocityY" : 0,
        "target" : target,
        "isTap" : true,
        "isPrimary" : domEvent.isPrimary,
        "longTapTimer" : window.setTimeout(this.__fireLongTap.bind(this, domEvent, target), qx.event.handler.GestureCore.LONGTAP_TIME)
      };
      if(domEvent.isPrimary){

        this.__isMultiPointerGesture = false;
        this.__primaryTarget = target;
        this.__fireTrack("trackstart", domEvent, target);
      } else {

        this.__isMultiPointerGesture = true;
        if(Object.keys(this.__gesture).length === 2){

          this.__initialAngle = this._calcAngle();
          this.__initialDistance = this._calcDistance();
        };
      };
    },
    /**
     * Helper method for gesture move.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    gestureMove : function(domEvent, target){

      var gesture = this.__gesture[domEvent.pointerId];
      if(gesture){

        var oldClientX = gesture.clientX;
        var oldClientY = gesture.clientY;
        gesture.clientX = domEvent.clientX;
        gesture.clientY = domEvent.clientY;
        gesture.lastEventTime = new Date().getTime();
        if(oldClientX){

          gesture.velocityX = gesture.clientX - oldClientX;
        };
        if(oldClientY){

          gesture.velocityY = gesture.clientY - oldClientY;
        };
        if(Object.keys(this.__gesture).length === 2){

          this.__fireRotate(domEvent, gesture.target);
          this.__firePinch(domEvent, gesture.target);
        };
        if(!this.__isMultiPointerGesture){

          this.__fireTrack("track", domEvent, gesture.target);
          this._fireRoll(domEvent, "touch", gesture.target);
        };
        // abort long tap timer if the distance is too big
        if(gesture.isTap){

          gesture.isTap = this._isBelowTapMaxDistance(domEvent);
          if(!gesture.isTap){

            this.__stopLongTapTimer(gesture);
          };
        };
      };
    },
    /**
     * Checks if a DOM element located between the target of a gesture
     * event and the element this handler is attached to has a gesture
     * handler of its own.
     *
     * @param target {Element} The gesture event's target
     * @return {Boolean}
     */
    _hasIntermediaryHandler : function(target){

      while(target && target !== this.__defaultTarget){

        if(target.$$gestureHandler){

          return true;
        };
        target = target.parentNode;
      };
      return false;
    },
    /**
     * Helper method for gesture end.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    gestureFinish : function(domEvent, target){

      // If no start position is available for this pointerup event, cancel gesture recognition.
      if(!this.__gesture[domEvent.pointerId]){

        return;
      };
      var gesture = this.__gesture[domEvent.pointerId];
      // delete the long tap
      this.__stopLongTapTimer(gesture);
      /*
        If the dom event's target or one of its ancestors have
        a gesture handler, we don't need to fire the gesture again
        since it bubbles.
       */
      if(this._hasIntermediaryHandler(target)){

        return;
      };
      // always start the roll impulse on the original target
      this.__handleRollImpulse(gesture.velocityX, gesture.velocityY, domEvent, gesture.target);
      this.__fireTrack("trackend", domEvent, gesture.target);
      if(gesture.isTap){

        if(target !== gesture.target){

          delete this.__gesture[domEvent.pointerId];
          return;
        };
        this._fireEvent(domEvent, "tap", domEvent.target || target);
        var isDblTap = false;
        if(Object.keys(this.__lastTap).length > 0){

          // delete old tap entries
          var limit = Date.now() - qx.event.handler.GestureCore.DOUBLETAP_TIME;
          for(var time in this.__lastTap){

            if(time < limit){

              delete this.__lastTap[time];
            } else {

              var lastTap = this.__lastTap[time];
              var isBelowDoubleTapDistance = this.__isBelowDoubleTapDistance(lastTap.x, lastTap.y, domEvent.clientX, domEvent.clientY, domEvent.getPointerType());
              var isSameTarget = lastTap.target === (domEvent.target || target);
              var isSameButton = lastTap.button === domEvent.button;
              if(isBelowDoubleTapDistance && isSameButton && isSameTarget){

                isDblTap = true;
                delete this.__lastTap[time];
                this._fireEvent(domEvent, "dbltap", domEvent.target || target);
              };
            };
          };
        };
        if(!isDblTap){

          this.__lastTap[Date.now()] = {
            x : domEvent.clientX,
            y : domEvent.clientY,
            target : domEvent.target || target,
            button : domEvent.button
          };
        };
      } else if(!this._isBelowTapMaxDistance(domEvent)){

        var swipe = this.__getSwipeGesture(domEvent, target);
        if(swipe){

          domEvent.swipe = swipe;
          this._fireEvent(domEvent, "swipe", gesture.target || target);
        };
      };
      delete this.__gesture[domEvent.pointerId];
    },
    /**
     * Stops the momentum scrolling currently running.
     *
     * @param id {Integer} The timeoutId of a 'roll' event
     */
    stopMomentum : function(id){

      this.__stopMomentum[id] = true;
    },
    /**
     * Cancels the gesture if running.
     * @param id {Number} The pointer Id.
     */
    gestureCancel : function(id){

      if(this.__gesture[id]){

        this.__stopLongTapTimer(this.__gesture[id]);
        delete this.__gesture[id];
      };
    },
    /**
     * Update the target of a running gesture. This is used in virtual widgets
     * when the DOM element changes.
     *
     * @param id {String} The pointer id.
     * @param target {Element} The new target element.
     * @internal
     */
    updateGestureTarget : function(id, target){

      this.__gesture[id].target = target;
    },
    /**
     * Method which will be called recursively to provide a momentum scrolling.
     * @param deltaX {Number} The last offset in X direction
     * @param deltaY {Number} The last offset in Y direction
     * @param domEvent {Event} The original gesture event
     * @param target {Element} The target of the momentum roll events
     * @param time {Number ?} The time in ms between the last two calls
     */
    __handleRollImpulse : function(deltaX, deltaY, domEvent, target, time){

      var oldTimeoutId = domEvent.timeoutId;
      // do nothing if we don't need to scroll
      if((Math.abs(deltaY) < 1 && Math.abs(deltaX) < 1) || this.__stopMomentum[oldTimeoutId]){

        delete this.__stopMomentum[oldTimeoutId];
        return;
      };
      if(!time){

        time = 1;
        var startFactor = 2.8;
        deltaY = deltaY / startFactor;
        deltaX = deltaX / startFactor;
      };
      time += 0.0006;
      deltaY = deltaY / time;
      deltaX = deltaX / time;
      // set up a new timer with the new delta
      var timeoutId = qx.bom.AnimationFrame.request(qx.lang.Function.bind(function(deltaX, deltaY, domEvent, target, time){

        this.__handleRollImpulse(deltaX, deltaY, domEvent, target, time);
      }, this, deltaX, deltaY, domEvent, target, time));
      deltaX = Math.round(deltaX * 100) / 100;
      deltaY = Math.round(deltaY * 100) / 100;
      // scroll the desired new delta
      domEvent.delta = {
        x : -deltaX,
        y : -deltaY
      };
      domEvent.momentum = true;
      domEvent.timeoutId = timeoutId;
      this._fireEvent(domEvent, "roll", domEvent.target || target);
    },
    /**
    * Calculates the angle of the primary and secondary pointer.
    * @return {Number} the rotation angle of the 2 pointers.
    */
    _calcAngle : function(){

      var pointerA = null;
      var pointerB = null;
      for(var pointerId in this.__gesture){

        var gesture = this.__gesture[pointerId];
        if(pointerA === null){

          pointerA = gesture;
        } else {

          pointerB = gesture;
        };
      };
      var x = pointerA.clientX - pointerB.clientX;
      var y = pointerA.clientY - pointerB.clientY;
      return (360 + Math.atan2(y, x) * (180 / Math.PI)) % 360;
    },
    /**
     * Calculates the scaling distance between two pointers.
     * @return {Number} the calculated distance.
     */
    _calcDistance : function(){

      var pointerA = null;
      var pointerB = null;
      for(var pointerId in this.__gesture){

        var gesture = this.__gesture[pointerId];
        if(pointerA === null){

          pointerA = gesture;
        } else {

          pointerB = gesture;
        };
      };
      var scale = Math.sqrt(Math.pow(pointerA.clientX - pointerB.clientX, 2) + Math.pow(pointerA.clientY - pointerB.clientY, 2));
      return scale;
    },
    /**
     * Checks if the distance between the x/y coordinates of DOM event
     * exceeds TAP_MAX_DISTANCE and returns the result.
     *
     * @param domEvent {Event} The DOM event from the browser.
     * @return {Boolean|null} true if distance is below TAP_MAX_DISTANCE.
     */
    _isBelowTapMaxDistance : function(domEvent){

      var delta = this._getDeltaCoordinates(domEvent);
      var maxDistance = qx.event.handler.GestureCore.TAP_MAX_DISTANCE[domEvent.getPointerType()];
      if(!delta){

        return null;
      };
      return (Math.abs(delta.x) <= maxDistance && Math.abs(delta.y) <= maxDistance);
    },
    /**
     * Checks if the distance between the x1/y1 and x2/y2 is
     * below the TAP_MAX_DISTANCE and returns the result.
     *
     * @param x1 {Number} The x position of point one.
     * @param y1 {Number} The y position of point one.
     * @param x2 {Number} The x position of point two.
     * @param y2 {Number} The y position of point two.
     * @param type {String} The pointer type e.g. "mouse"
     * @return {Boolean} <code>true</code>, if points are in range
     */
    __isBelowDoubleTapDistance : function(x1, y1, x2, y2, type){

      var clazz = qx.event.handler.GestureCore;
      var inX = Math.abs(x1 - x2) < clazz.DOUBLETAP_MAX_DISTANCE[type];
      var inY = Math.abs(y1 - y2) < clazz.DOUBLETAP_MAX_DISTANCE[type];
      return inX && inY;
    },
    /**
    * Calculates the delta coordinates in relation to the position on <code>pointerstart</code> event.
    * @param domEvent {Event} The DOM event from the browser.
    * @return {Map} containing the deltaX as x, and deltaY as y.
    */
    _getDeltaCoordinates : function(domEvent){

      var gesture = this.__gesture[domEvent.pointerId];
      if(!gesture){

        return null;
      };
      var deltaX = domEvent.clientX - gesture.startX;
      var deltaY = domEvent.clientY - gesture.startY;
      var axis = "x";
      if(Math.abs(deltaX / deltaY) < 1){

        axis = "y";
      };
      return {
        "x" : deltaX,
        "y" : deltaY,
        "axis" : axis
      };
    },
    /**
     * Fire a gesture event with the given parameters
     *
     * @param domEvent {Event} DOM event
     * @param type {String} type of the event
     * @param target {Element ? null} event target
     */
    _fireEvent : function(domEvent, type, target){

      // The target may have been removed, e.g. menu hide on tap
      if(!this.__defaultTarget){

        return;
      };
      var evt;
      if(qx.core.Environment.get("event.dispatchevent")){

        evt = new qx.event.type.dom.Custom(type, domEvent, {
          bubbles : true,
          swipe : domEvent.swipe,
          scale : domEvent.scale,
          angle : domEvent.angle,
          delta : domEvent.delta,
          pointerType : domEvent.pointerType,
          momentum : domEvent.momentum
        });
        target.dispatchEvent(evt);
      } else if(this.__emitter){

        evt = new qx.event.type.dom.Custom(type, domEvent, {
          target : this.__defaultTarget,
          currentTarget : this.__defaultTarget,
          srcElement : this.__defaultTarget,
          swipe : domEvent.swipe,
          scale : domEvent.scale,
          angle : domEvent.angle,
          delta : domEvent.delta,
          pointerType : domEvent.pointerType,
          momentum : domEvent.momentum
        });
        this.__emitter.emit(type, domEvent);
      };
    },
    /**
     * Fire "tap" and "dbltap" events after a native "dblclick"
     * event to fix IE 8's broken mouse event sequence.
     *
     * @param domEvent {Event} dblclick event
     */
    _onDblClick : function(domEvent){

      var target = qx.bom.Event.getTarget(domEvent);
      this._fireEvent(domEvent, "tap", target);
      this._fireEvent(domEvent, "dbltap", target);
    },
    /**
     * Returns the swipe gesture when the user performed a swipe.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     * @return {Map|null} returns the swipe data when the user performed a swipe, null if the gesture was no swipe.
     */
    __getSwipeGesture : function(domEvent, target){

      var gesture = this.__gesture[domEvent.pointerId];
      if(!gesture){

        return null;
      };
      var clazz = qx.event.handler.GestureCore;
      var deltaCoordinates = this._getDeltaCoordinates(domEvent);
      var duration = new Date().getTime() - gesture.startTime;
      var axis = (Math.abs(deltaCoordinates.x) >= Math.abs(deltaCoordinates.y)) ? "x" : "y";
      var distance = deltaCoordinates[axis];
      var direction = clazz.SWIPE_DIRECTION[axis][distance < 0 ? 0 : 1];
      var velocity = (duration !== 0) ? distance / duration : 0;
      var swipe = {
        startTime : gesture.startTime,
        duration : duration,
        axis : axis,
        direction : direction,
        distance : distance,
        velocity : velocity
      };
      return swipe;
    },
    /**
     * Fires a track event.
     *
     * @param type {String} the track type
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    __fireTrack : function(type, domEvent, target){

      domEvent.delta = this._getDeltaCoordinates(domEvent);
      this._fireEvent(domEvent, type, domEvent.target || target);
    },
    /**
     * Fires a roll event.
     *
     * @param domEvent {Event} DOM event
     * @param type {String} The type of the dom event
     * @param target {Element} event target
     */
    _fireRoll : function(domEvent, type, target){

      if(domEvent.type === qx.core.Environment.get("event.mousewheel").type){

        domEvent.delta = {
          x : qx.util.Wheel.getDelta(domEvent, "x") * qx.event.handler.GestureCore.ROLL_FACTOR,
          y : qx.util.Wheel.getDelta(domEvent, "y") * qx.event.handler.GestureCore.ROLL_FACTOR
        };
        domEvent.delta.axis = Math.abs(domEvent.delta.x / domEvent.delta.y) < 1 ? "y" : "x";
        domEvent.pointerType = "wheel";
      } else {

        var gesture = this.__gesture[domEvent.pointerId];
        domEvent.delta = {
          x : -gesture.velocityX,
          y : -gesture.velocityY,
          axis : Math.abs(gesture.velocityX / gesture.velocityY) < 1 ? "y" : "x"
        };
      };
      this._fireEvent(domEvent, "roll", domEvent.target || target);
    },
    /**
     * Fires a rotate event.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    __fireRotate : function(domEvent, target){

      if(!domEvent.isPrimary){

        var angle = this._calcAngle();
        domEvent.angle = Math.round((angle - this.__initialAngle) % 360);
        this._fireEvent(domEvent, "rotate", this.__primaryTarget);
      };
    },
    /**
     * Fires a pinch event.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    __firePinch : function(domEvent, target){

      if(!domEvent.isPrimary){

        var distance = this._calcDistance();
        var scale = distance / this.__initialDistance;
        domEvent.scale = (Math.round(scale * 100) / 100);
        this._fireEvent(domEvent, "pinch", this.__primaryTarget);
      };
    },
    /**
     * Fires the long tap event.
     *
     * @param domEvent {Event} DOM event
     * @param target {Element} event target
     */
    __fireLongTap : function(domEvent, target){

      var gesture = this.__gesture[domEvent.pointerId];
      if(gesture){

        this._fireEvent(domEvent, "longtap", domEvent.target || target);
        gesture.longTapTimer = null;
        gesture.isTap = false;
      };
    },
    /**
     * Stops the time for the long tap event.
     * @param gesture {Map} Data may representing the gesture.
     */
    __stopLongTapTimer : function(gesture){

      if(gesture.longTapTimer){

        window.clearTimeout(gesture.longTapTimer);
        gesture.longTapTimer = null;
      };
    },
    /**
     * Checks if the distance between the x/y coordinates of touchstart/mousedown and touchmove/mousemove event
     * exceeds TAP_MAX_DISTANCE and returns the result.
     *
     * @param event {Event} The event from the browser.
     * @return {Boolean} true if distance is below TAP_MAX_DISTANCE.
     */
    isBelowTapMaxDistance : function(event){

      var deltaCoordinates = this._calcDelta(event);
      var clazz = qx.event.handler.GestureCore;
      return (Math.abs(deltaCoordinates.x) <= clazz.TAP_MAX_DISTANCE && Math.abs(deltaCoordinates.y) <= clazz.TAP_MAX_DISTANCE);
    },
    /**
     * Dispose the current instance
     */
    dispose : function(){

      for(var gesture in this.__gesture){

        this.__stopLongTapTimer(gesture);
      };
      this._stopObserver();
      this.__defaultTarget = this.__emitter = null;
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

      // special handling for mixed prefixed / unprefixed implementations
      if(qx.bom.Event.supportsEvent(window, "webkitanimationstart")){

        return "webkitAnimationStart";
      };
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

      // special handling for mixed prefixed / unprefixed implementations
      if(qx.bom.Event.supportsEvent(window, "webkitanimationiteration")){

        return "webkitAnimationIteration";
      };
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

      // special handling for mixed prefixed / unprefixed implementations
      if(qx.bom.Event.supportsEvent(window, "webkitanimationend")){

        return "webkitAnimationEnd";
      };
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
     2004-2014 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

 ************************************************************************ */
/**
 * Util for mouse wheel normalization.
 */
qx.Bootstrap.define("qx.util.Wheel", {
  statics : {
    /**
     * The maximal measured scroll wheel delta.
     * @internal
     */
    MAXSCROLL : null,
    /**
     * The minimal measured scroll wheel delta.
     * @internal
     */
    MINSCROLL : null,
    /**
     * The normalization factor for the speed calculation.
     * @internal
     */
    FACTOR : 1,
    /**
     * Get the amount the wheel has been scrolled
     *
     * @param domEvent {Event} The native wheel event.
     * @param axis {String?} Optional parameter which defines the scroll axis.
     *   The value can either be <code>"x"</code> or <code>"y"</code>.
     * @return {Integer} Scroll wheel movement for the given axis. If no axis
     *   is given, the y axis is used.
     */
    getDelta : function(domEvent, axis){

      // default case
      if(axis === undefined){

        // default case
        var delta = 0;
        if(domEvent.wheelDelta !== undefined){

          delta = -domEvent.wheelDelta;
        } else if(domEvent.detail !== 0){

          delta = domEvent.detail;
        } else if(domEvent.deltaY !== undefined){

          // use deltaY as default for firefox
          delta = domEvent.deltaY;
        };;
        return this.__normalize(delta);
      };
      // get the x scroll delta
      if(axis === "x"){

        var x = 0;
        if(domEvent.wheelDelta !== undefined){

          if(domEvent.wheelDeltaX !== undefined){

            x = domEvent.wheelDeltaX ? this.__normalize(-domEvent.wheelDeltaX) : 0;
          };
        } else {

          if(domEvent.axis && domEvent.axis == domEvent.HORIZONTAL_AXIS && (domEvent.detail !== undefined) && (domEvent.detail > 0)){

            x = this.__normalize(domEvent.detail);
          } else if(domEvent.deltaX !== undefined){

            x = this.__normalize(domEvent.deltaX);
          };
        };
        return x;
      };
      // get the y scroll delta
      if(axis === "y"){

        var y = 0;
        if(domEvent.wheelDelta !== undefined){

          if(domEvent.wheelDeltaY !== undefined){

            y = domEvent.wheelDeltaY ? this.__normalize(-domEvent.wheelDeltaY) : 0;
          } else {

            y = this.__normalize(-domEvent.wheelDelta);
          };
        } else {

          if(!(domEvent.axis && domEvent.axis == domEvent.HORIZONTAL_AXIS) && (domEvent.detail !== undefined) && (domEvent.detail > 0)){

            y = this.__normalize(domEvent.detail);
          } else if(domEvent.deltaY !== undefined){

            y = this.__normalize(domEvent.deltaY);
          };
        };
        return y;
      };
      // default case, return 0
      return 0;
    },
    /**
     * Normalizer for the mouse wheel data.
     *
     * @param delta {Number} The mouse delta.
     * @return {Number} The normalized delta value
     */
    __normalize : function(delta){

      var absDelta = Math.abs(delta);
      if(absDelta === 0){

        return 0;
      };
      // store the min value
      if(qx.util.Wheel.MINSCROLL == null || qx.util.Wheel.MINSCROLL > absDelta){

        qx.util.Wheel.MINSCROLL = absDelta;
        this.__recalculateMultiplicator();
      };
      // store the max value
      if(qx.util.Wheel.MAXSCROLL == null || qx.util.Wheel.MAXSCROLL < absDelta){

        qx.util.Wheel.MAXSCROLL = absDelta;
        this.__recalculateMultiplicator();
      };
      // special case for systems not speeding up
      if(qx.util.Wheel.MAXSCROLL === absDelta && qx.util.Wheel.MINSCROLL === absDelta){

        return 2 * (delta / absDelta);
      };
      var range = qx.util.Wheel.MAXSCROLL - qx.util.Wheel.MINSCROLL;
      var ret = (delta / range) * Math.log(range) * qx.util.Wheel.FACTOR;
      // return at least 1 or -1
      return ret < 0 ? Math.min(ret, -1) : Math.max(ret, 1);
    },
    /**
     * Recalculates the factor with which the calculated delta is normalized.
     */
    __recalculateMultiplicator : function(){

      var max = qx.util.Wheel.MAXSCROLL || 0;
      var min = qx.util.Wheel.MINSCROLL || max;
      if(max <= min){

        return;
      };
      var range = max - min;
      var maxRet = (max / range) * Math.log(range);
      if(maxRet == 0){

        maxRet = 1;
      };
      qx.util.Wheel.FACTOR = 6 / maxRet;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2014-2015 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */
/**
 * A carousel is a widget which can switch between several sub pages {@link qx.ui.website.Widget}.
 * A page switch is triggered by a swipe to left, for next page, or a swipe to right for
 * previous page. Pages can also be switched by dragging.
 *
 * A carousel shows by default a pagination indicator at the bottom of the carousel.
 *
 * @require(qx.module.Transform)
 * @require(qx.module.event.Swipe)
 * @require(qx.module.event.GestureHandler)
 * @require(qx.module.event.Track)
 */
qx.Bootstrap.define("qx.ui.website.Carousel", {
  extend : qx.ui.website.Widget,
  statics : {
    _config : {
      /**
       * The time in milliseconds for the page switch animation.
       */
      pageSwitchDuration : 500
    },
    /**
     * Factory method which converts the current collection into a collection of
     * Carousel widgets.
     *
     * @return {qx.ui.website.Carousel} A new carousel collection.
     * @attach {qxWeb}
     */
    carousel : function(){

      var carousel = new qx.ui.website.Carousel(this);
      carousel.init();
      return carousel;
    }
  },
  construct : function(selector, context){

    this.base(arguments, selector, context);
  },
  members : {
    __active : null,
    __pageContainer : null,
    __scrollContainer : null,
    __paginationLabels : null,
    __startPosLeft : null,
    __pagination : null,
    _ie9 : false,
    __blocked : false,
    // overridden
    init : function(){

      if(!this.base(arguments)){

        return false;
      };
      this._ie9 = qx.core.Environment.get("browser.documentmode") === 9;
      if(this._ie9){

        this.setConfig("pageSwitchDuration", 10);
      } else {

        this.addClass("qx-flex-ready");
      };
      qxWeb(window).on("resize", this._onResize, this);
      var prefix = this.getCssPrefix();
      this.__scrollContainer = qxWeb.create("<div>").addClass(prefix + "-container").appendTo(this);
      this.__pageContainer = qxWeb.create("<div>").addClass("qx-hbox").setStyle("height", "100%").appendTo(this.__scrollContainer);
      this.__paginationLabels = [];
      this.__pagination = qxWeb.create("<div>").addClasses([prefix + "-pagination", "qx-hbox", "qx-flex1"]).setStyle("visibility", "excluded").appendTo(this);
      if(this._ie9){

        this.__pageContainer.setStyle("display", "table");
        this.__pagination.setStyle("textAlign", "center");
      } else {

        this.on("trackstart", this._onTrackStart, this).on("track", this._onTrack, this).on("trackend", this._onTrackEnd, this);
      };
      this.on("swipe", this._onSwipe, this);
      this.render();
      return true;
    },
    render : function(){

      var pages = this.find("." + this.getCssPrefix() + "-page");
      pages.forEach(function(page){

        this.addPage(qxWeb(page));
      }.bind(this));
      if(pages.length > 0){

        this.setActive(pages.eq(0));
      };
      return this;
    },
    /**
     * Sets one of the Carousel's pages as active, meaning it will be
     * visible.
     *
     * @param page {qxWeb} The page to be activated
     */
    setActive : function(page){

      var old = this.__active;
      this.__active = page;
      this._update();
      var data = {
        value : page,
        old : old,
        target : this
      };
      this.emit("changeActive", data);
    },
    /**
     * Returns the currently active (i.e. visible) page
     * @return {qxWeb} The active page
     */
    getActive : function(){

      return this.__active;
    },
    /**
     * Scrolls the carousel to the next page.
     *
     * @return {qx.ui.website.Carousel} Self instance for chaining
     */
    nextPage : function(){

      var pages = this._getPages();
      if(pages.length == 0){

        return this;
      };
      var next = this.getActive().getNext();
      // prevent overflow if we don't use the endless loop mode
      if(pages.length > 2){

        if(next.length === 0){

          next = pages.eq(0);
        };
      };
      if(next.length > 0){

        this.setActive(next);
      };
      return this;
    },
    /**
     * Scrolls the carousel to the previous page.
     *
     * @return {qx.ui.website.Carousel} Self instance for chaining
     */
    previousPage : function(){

      var pages = this._getPages();
      if(pages.length == 0){

        return this;
      };
      var prev = this.getActive().getPrev();
      // prevent overflow if we don't use the endless loop mode
      if(pages.length > 2){

        if(prev.length == 0){

          prev = pages.eq(pages.length - 1);
        };
      };
      if(prev.length > 0){

        this.setActive(prev);
      };
      return this;
    },
    /**
     * Adds a page to the Carousel. Updates the pagination,
     * scroll position, active property and the sizing.
     * @param child {qxWeb} The added child.
     */
    addPage : function(child){

      child.addClasses(["qx-flex1", this.getCssPrefix() + "-page"]).appendTo(this.__pageContainer);
      if(this.find("." + this.getCssPrefix() + "-page").length > this.__paginationLabels.length){

        var paginationLabel = this._createPaginationLabel();
        this.__paginationLabels.push(paginationLabel);
        this.__pagination.append(paginationLabel);
      };
      this._updateWidth();
      if(!this.getActive()){

        this.setActive(child);
      } else if(this._getPages().length > 2){

        this._updateOrder();
      };
      if(this._ie9){

        child.setStyle("display", "table-cell");
      };
      this.find(".scroll").setStyle("touchAction", "pan-y");
      // scroll as soon as we have the third page added
      if(this._getPages().length === 3 && !this._ie9){

        this.__scrollContainer.translate([(-this.getWidth()) + "px", 0, 0]);
      };
      this._updatePagination();
    },
    /**
     * Removes a page from the Carousel. Updates the pagination,
     * scroll position, active property and the sizing.
     * @param child {qxWeb} The removed child.
     */
    removePage : function(child){

      child.remove();
      // reset the active page if we don' have any page at all
      if(this._getPages().length == 0){

        this.__pagination.empty();
        this.__paginationLabels = [];
        this.setActive(null);
        return;
      };
      this._updateWidth();
      if(this.getActive()[0] == child[0]){

        this.setActive(this._getPages().eq(0));
      } else if(this._getPages().length > 2){

        this._updateOrder();
      } else {

        // remove all order properties
        this._setOrder(this._getPages(), 0);
      };
      this.__paginationLabels.splice(child.priorPosition, 1)[0].remove();
      for(var i = 0;i < this.__paginationLabels.length;i++){

        this.__paginationLabels[i].getChildren(".label").setHtml((i + 1) + "");
      };
      this._updatePagination();
    },
    /**
     * Updates the order, scroll position and pagination.
     */
    _update : function(){

      if(!this.getActive()){

        return;
      };
      // special case for only one page
      if(this._getPages().length < 2){

        return;
      } else if(this._getPages().length == 2){

        if(this._getPages()[0] === this.getActive()[0]){

          this._translateTo(0);
        } else {

          this._translateTo(this.getWidth());
        };
        this._updatePagination();
        return;
      };
      var left;
      if(!this._ie9){

        var direction = this._updateOrder();
        if(direction == "right"){

          left = this._getPositionLeft() - this.__scrollContainer.getWidth();
        } else if(direction == "left"){

          left = this._getPositionLeft() + this.__scrollContainer.getWidth();
        } else if(this._getPages().length >= 3){

          // back snapping if the order has not changed
          this._translateTo(this.getWidth());
          return;
        } else {

          // do nothing if we don't have enough pages
          return;
        };;
        if(left !== undefined){

          // first, translate the old page into view
          this.__scrollContainer.translate([(-left) + "px", 0, 0]);
          // animate to the new page
          this._translateTo(this.getWidth());
        };
      } else {

        var index = this._getPages().indexOf(this.getActive());
        left = index * this.getWidth();
        this._translateTo(left);
      };
      this._updatePagination();
    },
    /**
     * Updates the CSS order property of the flexbox layout.
     * The active page should be the second in order with a order property of '0'.
     * The page left to the active has the order property set to '-1' and is the
     * only one on the left side. All other pages get increasing order numers and
     * are alligned on the right side.
     *
     * @return {String} The scroll direction, either 'left' or 'right'.
     */
    _updateOrder : function(){

      if(this._ie9){

        return "left";
      };
      var scrollDirection;
      var pages = this._getPages();
      var orderBefore = this._getOrder(this.getActive());
      if(orderBefore > 0){

        scrollDirection = "right";
      } else if(orderBefore < 0){

        scrollDirection = "left";
      };
      var activeIndex = pages.indexOf(this.getActive());
      this._setOrder(this.getActive(), 0);
      // active page should always have order 0
      var order = 1;
      // order all pages with a higher index than the active page
      for(var i = activeIndex + 1;i < pages.length;i++){

        // move the last page to the left of the active page
        if(activeIndex === 0 && i == pages.length - 1){

          order = -1;
        };
        this._setOrder(pages.eq(i), order++);
      };
      // order all pages with a lower index than the active page
      for(i = 0;i < activeIndex;i++){

        // move the last page to the left of the active page
        if(i == activeIndex - 1){

          order = -1;
        };
        this._setOrder(pages.eq(i), order++);
      };
      return scrollDirection;
    },
    /**
     * Updates the width of the container and the pages.
     */
    _updateWidth : function(){

      if(!this.isRendered() || this.getProperty("offsetWidth") === 0){

        this.setStyle("visibility", "hidden");
        if(!this.hasListener("appear", this._updateWidth, this)){

          this.once("appear", this._updateWidth, this);
        };
        return;
      };
      // set the inital transition on first appear
      if(this._getPositionLeft() === 0 && this._getPages().length > 2 && !this._ie9){

        this.__scrollContainer.translate([(-this.getWidth()) + "px", 0, 0]);
      };
      // set the container width to total width of all pages
      var containerWidth = this.getWidth() * this._getPages().length;
      this.__pageContainer.setStyle("width", containerWidth + "px");
      // set the width of all pages to the carousel width
      this._getPages().setStyle("width", this.getWidth() + "px");
      this.setStyle("visibility", "visible");
    },
    /**
     * Handler for trackstart. It saves the initial scroll position and
     * cancels any running animation.
     */
    _onTrackStart : function(){

      if(this.__blocked){

        return;
      };
      this.__startPosLeft = this._getPositionLeft();
      this.__scrollContainer.stop().translate([(-Math.round(this.__startPosLeft)) + "px", 0, 0]);
    },
    /**
     * Track handler which updates the scroll position.
     * @param e {Event} The track event.
     */
    _onTrack : function(e){

      if(this.__blocked){

        return;
      };
      if(e.delta.axis == "x" && this._getPages().length > 2){

        this.__scrollContainer.translate([-(this.__startPosLeft - e.delta.x) + "px", 0, 0]);
      };
    },
    /**
     * TrackEnd handler for enabling the scroll events.
     */
    _onTrackEnd : function(){

      if(this.__startPosLeft == null || this.__blocked){

        // dont end if we didn't start
        return;
      };
      // make sure the trackend handling is done after the swipe handling
      window.setTimeout(function(){

        if(this._getPages().length < 3 || this.__scrollContainer.isPlaying()){

          return;
        };
        this.__startPosLeft = null;
        var width = this.getWidth();
        var pages = this._getPages();
        var oldActive = this.getActive();
        // if more than 50% is visible of the previous page
        if(this._getPositionLeft() < (width - (width / 2))){

          var prev = this.getActive().getPrev();
          if(prev.length == 0){

            prev = pages.eq(pages.length - 1);
          };
          this.setActive(prev);
        } else if(this._getPositionLeft() > (width + width / 2)){

          var next = this.getActive().getNext();
          if(next.length == 0){

            next = pages.eq(0);
          };
          this.setActive(next);
        };
        if(this.getActive() == oldActive){

          this._update();
        };
      }.bind(this), 0);
    },
    /**
     * Swipe handler which triggers page changes based on the
     * velocity and the direction.
     * @param e {Event} The swipe event.
     */
    _onSwipe : function(e){

      if(this.__blocked){

        return;
      };
      var velocity = Math.abs(e.getVelocity());
      if(e.getAxis() == "x" && velocity > 0.25){

        if(e.getDirection() == "left"){

          this.nextPage();
        } else if(e.getDirection() == "right"){

          this.previousPage();
        };
      };
    },
    /**
     * Factory method for a paginationLabel.
     * @return {qxWeb} the created pagination label.
     */
    _createPaginationLabel : function(){

      var paginationIndex = this._getPages().length;
      return qxWeb.create('<div class="' + this.getCssPrefix() + '-pagination-label"></div>').on("tap", this._onPaginationLabelTap, this).append(qxWeb.create('<div class="label">' + paginationIndex + '</div>'));
    },
    /**
     * Handles the tap on pagination labels and changes to the desired page.
     * @param e {Event} The tap event.
     */
    _onPaginationLabelTap : function(e){

      this.__paginationLabels.forEach(function(label, index){

        if(label[0] === e.currentTarget){

          var pages = this._getPages();
          // wo don't reorder with two pages there just set the active property
          if(pages.length === 2){

            this.setActive(pages.eq(index));
            return;
          };
          var activeIndex = pages.indexOf(this.getActive());
          var distance = index - activeIndex;
          // set the order to deault dom order
          this._setOrder(pages, 0);
          // get the active page into view
          this.__scrollContainer.translate([(-activeIndex * this.getWidth()) + "px", 0, 0]);
          this.__blocked = true;
          // animate to the desired page
          this._translateTo((activeIndex + distance) * this.getWidth());
          this.__scrollContainer.once("animationEnd", function(page){

            this.__blocked = false;
            // set the viewport back to the default position
            this.__scrollContainer.translate([(-this.getWidth()) + "px", 0, 0]);
            this.setActive(page);
            // this also updates the order
            this._updatePagination();
          }.bind(this, pages.eq(index)));
        };
      }.bind(this));
    },
    /**
     * Updates the pagination indicator of this carousel.
     * Adds the 'active' CSS class to the currently visible page's
     * pagination button.
     */
    _updatePagination : function(){

      // hide the pagination for one page
      this._getPages().length < 2 ? this.__pagination.setStyle("visibility", "excluded") : this.__pagination.setStyle("visibility", "visible");
      this.__pagination.find("." + this.getCssPrefix() + "-pagination-label").removeClass("active");
      var pages = this._getPages();
      this.__paginationLabels[pages.indexOf(this.getActive())].addClass("active");
    },
    /**
     * Resize handler. It updates the sizes, snap points and scroll position.
     */
    _onResize : function(){

      this._updateWidth();
      if(this._getPages().length > 2){

        this.__scrollContainer.translate([(-this.getWidth()) + "px", 0, 0]);
      };
    },
    /**
     * Animates using CSS translations to the given left position.
     * @param left {Number} The new left position
     */
    _translateTo : function(left){

      this.__scrollContainer.animate({
        duration : this.getConfig("pageSwitchDuration"),
        keep : 100,
        timing : "ease",
        keyFrames : {
          '0' : {
          },
          '100' : {
            translate : [(-left) + "px", 0, 0]
          }
        }
      });
    },
    /**
     * Sets the given order on the given collection.
     * @param col {qxWeb} The collection to set the css property.
     * @param value {Number|String} The value for the order property
     */
    _setOrder : function(col, value){

      col.setStyles({
        order : value,
        msFlexOrder : value
      });
    },
    /**
     * Returns the order css property of the given collection.
     * @param col {qxWeb} The collection to check.
     * @return {Number} The order as number.
     */
    _getOrder : function(col){

      var order = parseInt(col.getStyle("order"));
      if(isNaN(order)){

        order = parseInt(col.getStyle("msFlexOrder"));
      };
      return order;
    },
    /**
     * Geturns a collection of all pages.
     * @return {qxWeb} All pages.
     */
    _getPages : function(){

      return this.__pageContainer.find("." + this.getCssPrefix() + "-page");
    },
    /**
     * Returns the current left position.
     * @return {Number} The position in px.
     */
    _getPositionLeft : function(){

      var containerRect = this.__scrollContainer[0].getBoundingClientRect();
      var parentRect = this[0].getBoundingClientRect();
      return -(containerRect.left - parentRect.left);
    },
    // overridden
    dispose : function(){

      qxWeb(window).off("resize", this._onResize, this);
      this.off("trackstart", this._onTrackStart, this).off("track", this._onTrack, this).off("swipe", this._onSwipe, this).off("trackend", this._onTrackEnd, this);
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      carousel : statics.carousel
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
qx.Bootstrap.define('qx.ui.website.DatePicker', {
  extend : qx.ui.website.Widget,
  statics : {
    /** List of valid positions to check against */
    __validPositions : null,
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
     *
     * *position*
     *
     * Position of the calendar popup from the point of view of the <code>INPUT</code> element.
     * Possible values are
     *
     * * <code>top-left</code>
     * * <code>top-center</code>
     * * <code>top-right</code>
     * * <code>bottom-left</code>
     * * <code>bottom-center</code>
     * * <code>bottom-right</code>
     * * <code>left-top</code>
     * * <code>left-middle</code>
     * * <code>left-bottom</code>
     * * <code>right-top</code>
     * * <code>right-middle</code>
     * * <code>right-bottom</code>
     *
     * Default value:
     * <pre>bottom-left</pre>
     */
    _config : {
      format : function(date){

        return date.toLocaleDateString();
      },
      readonly : true,
      icon : null,
      mode : 'input',
      position : 'bottom-left'
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
    _calendarId : null,
    _iconId : null,
    _uniqueId : null,
    /**
     * Get the associated calendar widget
     * @return {qx.ui.website.Calendar} calendar widget instance
     */
    getCalendar : function(){

      var calendarCollection = qxWeb();
      calendarCollection = calendarCollection.concat(qxWeb('div#' + this._calendarId));
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
      var uniqueId = Math.round(Math.random() * 10000);
      this._uniqueId = uniqueId;
      this.__setReadOnly(this);
      this.__setIcon(this);
      this.__addInputListener(this);
      var calendarId = 'datepicker-calendar-' + uniqueId;
      var calendar = qxWeb.create('<div id="' + calendarId + '"></div>').calendar();
      calendar.on('tap', this._onCalendarTap);
      calendar.appendTo(document.body).hide();
      // create the connection between the date picker and the corresponding calendar widget
      this._calendarId = calendarId;
      // grab tap events at the body element to be able to hide the calender popup
      // if the user taps outside
      var bodyElement = qxWeb.getDocument(this).body;
      qxWeb(bodyElement).on('tap', this._onBodyTap, this);
      // react on date selection
      calendar.on('changeValue', this._calendarChangeValue, this);
      if(date !== undefined){

        calendar.setValue(date);
      };
      return true;
    },
    // overridden
    render : function(){

      this.getCalendar().render();
      this.__setReadOnly(this);
      this.__setIcon(this);
      this.__addInputListener(this);
      this.setEnabled(this.getEnabled());
      return this;
    },
    // overridden
    setConfig : function(name, config){

      if(name === 'position'){

        var validPositions = qx.ui.website.DatePicker.__validPositions;
        if(validPositions.indexOf(config) === -1){

          throw new Error('Wrong config value for "position"! ' + 'Only the values "' + validPositions.join('", "') + '" are supported!');
        };
      };
      this.base(arguments, name, config);
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
      var calendar = this.getCalendar();
      if(calendar.getStyle('display') == 'none'){

        // set position to make sure the width of the DOM element is correct - otherwise the DOM 
        // element would be as wide as the parent (e.g. the body element). This would mess up the
        // positioning with 'placeTo'
        calendar.setStyle('position', 'absolute').show().placeTo(this, this.getConfig('position'));
      } else {

        calendar.hide();
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

        var icon = qxWeb('#' + this._iconId);
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

        icon = collection.getNext('img#' + collection._iconId);
        if(icon.length === 1){

          icon.off('tap', this._onTap, collection);
          icon.remove();
        };
      } else {

        var iconId = 'datepicker-icon-' + collection._uniqueId;
        // check if there is already an icon
        if(collection._iconId == undefined){

          collection._iconId = iconId;
          icon = qxWeb.create('<img>');
          icon.setAttributes({
            id : iconId,
            src : collection.getConfig('icon')
          });
          icon.addClass(this.getCssPrefix() + '-icon');
          var openingMode = collection.getConfig('mode');
          if(openingMode === 'icon' || openingMode === 'both'){

            if(!icon.hasListener('tap', this._onTap, collection)){

              icon.on('tap', this._onTap, collection);
            };
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

        collection.off('tap', collection._onTap);
      } else {

        if(!collection.hasListener('tap', collection._onTap)){

          collection.on('tap', collection._onTap);
        };
      };
    },
    // overridden
    dispose : function(){

      this.removeAttribute('readonly');
      this.getNext('img#' + this._iconId).remove();
      this.off('tap', this._onTap);
      var bodyElement = qxWeb.getDocument(this).body;
      qxWeb(bodyElement).off('tap', this._onBodyTap, this);
      this.getCalendar().off('changeValue', this._calendarChangeValue, this).off('tap', this._onCalendarTap);
      var calendar = qxWeb('div#' + this._calendarId);
      calendar.remove();
      calendar.dispose();
      return this.base(arguments);
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      datepicker : statics.datepicker
    });
    statics.__validPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'left-top', 'left-middle', 'left-bottom', 'right-top', 'right-middle', 'right-bottom'];
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
      if(this.getAttribute("tabindex") < 0){

        this.setAttribute("tabindex", 0);
      };
      this.on("focus", this._onFocus, this).on("blur", this._onBlur, this).getChildren("span").addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).on("tap", this._onTap, this);
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
      var children = this.getChildren("span");
      children.removeClass(cssPrefix + "-item-off");
      children.slice(value, children.length).addClass(cssPrefix + "-item-off");
      this.emit("changeValue", this.getValue());
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
      return this.getChildren("span").not("." + cssPrefix + "-item-off").length;
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
      var children = this.getChildren();
      children.setHtml(this.getConfig("symbol"));
      var diff = length - children.length;
      if(diff > 0){

        for(var i = 0;i < diff;i++){

          qxWeb.create("<span>" + this.getConfig("symbol") + "</span>").on("tap", this._onTap, this).addClasses([cssPrefix + "-item", cssPrefix + "-item-off"]).appendTo(this);
        };
      } else {

        for(var i = 0;i < Math.abs(diff);i++){

          this.getChildren().getLast().off("tap", this._onTap, this).remove();
        };
      };
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

      qxWeb(document.documentElement).off("keydown", this._onKeyDown, this);
      this.off("focus", this._onFocus, this).off("blur", this._onBlur, this);
      this.getChildren("span").off("tap", this._onTap, this);
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