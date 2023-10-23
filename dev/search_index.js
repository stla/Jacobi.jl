var documenterSearchIndex = {"docs":
[{"location":"#EllipticFunctions.jl-documentation","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"","category":"section"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"Jacobi theta functions and related functions.","category":"page"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"using EllipticFunctions\nusing Images\n# array of complex values.\nz = (1:-0.001:-1) .* im .+ (-1:0.001:1)';\n# function z->RGB \nfunction colormap(z)\n    if isinf(z) || isnan(z)\n        return RGB(0, 0, 0)\n    end\n    r = mod(abs(z), 1.0)\n    g = 2 * mod(angle(z), 0.5)\n    b = mod(real(z) * imag(z), 1.0)\n    if isnan(b)\n        return RGB(0, 0, 0)\n    end\n    return RGB(\n        (1.0 - cos(r-0.5))*8.0,\n        (1.0 - cos(g-0.5))*8.0,\n        (1.0 - cos(b-0.5))*8.0\n    )\nend\n# function to be plottes\nfunction f(z)\n    return EllipticFunctions.wzeta(z; tau = 0.1 + 3im)\nend\n# raster image\nimage = colormap.(f(3*z))","category":"page"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"(Image: )","category":"page"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"","category":"page"},{"location":"#Functions","page":"EllipticFunctions.jl documentation","title":"Functions","text":"","category":"section"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"The Weierstrass elliptic functions wp, sigma and zeta  are vectorized in the variable z. That means you do not need to  use broadcasting in order to apply them to an array of z values  (this would be slower).","category":"page"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"ljtheta1\njtheta1\nljtheta2\njtheta2\nljtheta3\njtheta3\nljtheta4\njtheta4\njtheta_ab\njtheta1dash\nqfromtau\ntaufromq\netaDedekind\nlambda\nkleinj\nkleinjinv\nCarlsonRC\nCarlsonRD\nCarlsonRF\nCarlsonRG\nCarlsonRJ\nellipticE\nellipticF\nellipticK\nellipticPI\nellipticZ\nagm\nEisensteinE2\nEisensteinE4\nEisensteinE6\nellipticInvariants\nhalfPeriods\nwp\nwsigma\nwzeta\nthetaC\nthetaD\nthetaN\nthetaS\njellip\nam","category":"page"},{"location":"#EllipticFunctions.ljtheta1","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ljtheta1","text":"ljtheta1(z, q)\n\nLogarithm of the first Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta1","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta1","text":"jtheta1(z, q)\n\nFirst Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ljtheta2","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ljtheta2","text":"ljtheta2(z, q)\n\nLogarithm of the second Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta2","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta2","text":"jtheta2(z, q)\n\nSecond Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ljtheta3","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ljtheta3","text":"ljtheta3(z, q)\n\nLogarithm of the third Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of complex numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta3","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta3","text":"jtheta3(z, q)\n\nThird Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ljtheta4","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ljtheta4","text":"ljtheta4(z, q)\n\nLogarithm of the fourth Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of complex numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta4","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta4","text":"jtheta4(z, q)\n\nFourth Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta_ab","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta_ab","text":"jtheta_ab(a, b, z, q)\n\nJacobi theta function with characteristics. This is a family of functions parameterized by a and b, which contains the opposite of the first Jacobi  theta function (a=b=0.5), the second Jacobi theta function (a=0.5,b=0),  the third Jacobi theta function (a=b=0), and the fourth Jacobi theta  function (a=0,b=0.5).\n\nArguments\n\na: first characteristic, a real or complex number\nb: second characteristic, a real or complex number\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jtheta1dash","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jtheta1dash","text":"jtheta1dash(z, q)\n\nDerivative of the first Jacobi theta function.\n\nArguments\n\nz: real or complex number or array of numbers\nq: the nome\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.qfromtau","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.qfromtau","text":"qfromtau(tau)\n\nThe nome q given the tau parameter.\n\nArguments\n\ntau: complex number with nonnegative imaginary part\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.taufromq","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.taufromq","text":"taufromq(q)\n\nThe tau parameter given the nome q.\n\nArguments\n\nq: complex number, the nome; it must not be a negative real number and its modulus must be strictly smaller than 1\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.etaDedekind","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.etaDedekind","text":"etaDedekind(tau)\n\nDedekind eta function.\n\nArguments\n\ntau: complex number with nonnegative imaginary part\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.lambda","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.lambda","text":"lambda(tau)\n\nLambda modular function.\n\nArguments\n\ntau: complex number with nonnegative imaginary part\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.kleinj","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.kleinj","text":"kleinj(tau)\n\nKlein j-invariant function.\n\nArguments\n\ntau: complex number with nonnegative imaginary part\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.kleinjinv","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.kleinjinv","text":"kleinjinv(j)\n\nInverse of the Klein j-invariant function.\n\nArguments\n\nj: real or complex number\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.CarlsonRC","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.CarlsonRC","text":"CarlsonRC(x, y)\n\nCarlson 'RC' integral.\n\nArguments\n\nx,y: real or complex numbers; y cannot be zero\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.CarlsonRD","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.CarlsonRD","text":"CarlsonRD(x, y, z)\n\nCarlson 'RD' integral.\n\nArguments\n\nx,y,z: real or complex numbers; at most one of them can be zero\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.CarlsonRF","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.CarlsonRF","text":"CarlsonRF(x, y, z)\n\nCarlson 'RF' integral.\n\nArguments\n\nx,y,z: real or complex numbers; at most one of them can be zero\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.CarlsonRG","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.CarlsonRG","text":"CarlsonRG(x, y, z)\n\nCarlson 'RG' integral.\n\nArguments\n\nx,y,z: real or complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.CarlsonRJ","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.CarlsonRJ","text":"CarlsonRJ(x, y, z, p)\n\nCarlson 'RJ' integral.\n\nArguments\n\nx,y,z,p: real or complex numbers; at most one of them can be zero\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticE","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticE","text":"ellipticE(phi, m)\n\nIncomplete elliptic integral of the second kind.\n\nArguments\n\nphi: real or complex number, the amplitude\nm: real or complex number, the squared modulus\n\n\n\n\n\nellipticE(m)\n\nComplete elliptic integral of the second kind.\n\nArguments\n\nm: real or complex number, the squared modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticF","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticF","text":"ellipticF(phi, m)\n\nIncomplete elliptic integral of the first kind.\n\nArguments\n\nphi: real or complex number, the amplitude\nm: real or complex number, the squared modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticK","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticK","text":"ellipticK(m)\n\nComplete elliptic integral of the first kind.\n\nArguments\n\nm: real or complex number, the squared modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticPI","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticPI","text":"ellipticPI(phi, n, m)\n\nIncomplete elliptic integral of first kind.\n\nArguments\n\nphi: real or complex number, the amplitude\nn: real or complex number, the characteristic\nm: real or complex number, the squared modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticZ","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticZ","text":"ellipticZ(phi, m)\n\nJacobi Zeta function.\n\nArguments\n\nphi: real or complex number, the amplitude\nm: real or complex number, the squared modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.agm","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.agm","text":"agm(x, y)\n\nArithmetic-geometric mean.\n\nArguments\n\nx,y: real or complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.EisensteinE2","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.EisensteinE2","text":"EisensteinE2(q)\n\nEisenstein E-series of weight 2.\n\nArguments\n\nq: nome, real or complex number; it must not be a negative real number and its modulus must be strictly smaller than 1\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.EisensteinE4","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.EisensteinE4","text":"EisensteinE4(q)\n\nEisenstein E-series of weight 4.\n\nArguments\n\nq: nome, real or complex number; it must not be a negative real number and its modulus must be strictly smaller than 1\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.EisensteinE6","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.EisensteinE6","text":"EisensteinE6(q)\n\nEisenstein E-series of weight 6.\n\nArguments\n\nq: nome, real or complex number; it must not be a negative real number and its modulus must be strictly smaller than 1\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.ellipticInvariants","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.ellipticInvariants","text":"ellipticInvariants(omega1, omega2)\n\nWeierstrass elliptic invariants g_2 and g_3 from the half-periods.\n\nArguments\n\nomega1,omega2: the Weierstrass half periods, real or complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.halfPeriods","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.halfPeriods","text":"halfPeriods(g2, g3)\n\nHalf-periods omega_1 and omega_2 from the elliptic invariants.\n\nArguments\n\ng2,g3: the Weierstrass elliptic invariants, real or complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.wp","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.wp","text":"wp(z; tau, omega, g, derivative=0)\n\nWeierstrass p-function. One and only one of the parameters tau, omega or g must be given.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: half-periods ratio, complex number with non negative imaginary part\nomega: half-periods, a pair (tuple) of complex numbers\ng: elliptic invariants, a pair (tuple) of complex numbers\nderivative: order of differentiation, 0, 1, 2 or 3\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.wsigma","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.wsigma","text":"wsigma(z; tau, omega, g)\n\nWeierstrass sigma-function. One and only one of the parameters tau, omega or g must be given.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: half-periods ratio, complex number with non negative imaginary part\nomega: half-periods, a pair (tuple) of complex numbers\ng: elliptic invariants, a pair (tuple) of complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.wzeta","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.wzeta","text":"wzeta(z; tau, omega, g)\n\nWeierstrass zeta-function. One and only one of the parameters tau, omega or g must be given.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: half-periods ratio, complex number with non negative imaginary part\nomega: half-periods, a pair of complex numbers\ng: elliptic invariants, a pair of complex numbers\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.thetaC","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.thetaC","text":"thetaC(z; tau, m)\n\nNeville C-theta function. Only one of the parameters tau or m must be supplied.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: complex number with nonnegative imaginary part\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.thetaD","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.thetaD","text":"thetaD(z; tau, m)\n\nNeville D-theta function. Only one of the parameters tau or m must be supplied.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: complex number with nonnegative imaginary part\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.thetaN","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.thetaN","text":"thetaN(z; tau, m)\n\nNeville N-theta function. Only one of the parameters tau or m must be supplied.\n\nArguments\n\nz: real or complex number or vector/array of complex numbers\ntau: complex number with nonnegative imaginary part\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.thetaS","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.thetaS","text":"thetaS(z; tau, m)\n\nNeville S-theta function. Only one of the parameters tau or m must be supplied.\n\nArguments\n\nz: real or complex number or array of numbers\ntau: complex number with nonnegative imaginary part\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.jellip","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jellip","text":"jellip(kind, u; tau, m)\n\nJacobi elliptic functions. Only one of the parameters tau or m must be supplied.\n\nArguments\n\nkind: a string with two characters among 'c', 'd', 'n' or 's'; this string specifies the function: the two letters respectively denote the basic functions sn, cn, dn and 1, and the string specifies the ratio of two such functions, e.g. ns=1/sn and cd=cn/dn\nu: a real or complex number or array of numbers\ntau: complex number with nonnegative imaginary part\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#EllipticFunctions.am","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.am","text":"am(u, m)\n\nAmplitude function.\n\nArguments\n\nu: real or complex number or array of numbers\nm: real or complex number, square of the elliptic modulus\n\n\n\n\n\n","category":"function"},{"location":"#Index","page":"EllipticFunctions.jl documentation","title":"Index","text":"","category":"section"},{"location":"","page":"EllipticFunctions.jl documentation","title":"EllipticFunctions.jl documentation","text":"","category":"page"}]
}
