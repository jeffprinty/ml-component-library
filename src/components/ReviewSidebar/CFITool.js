
export function compareCFIs(aa,bb,delta) {
  if ( aa.split('!').length > 1) {
    aa = aa.split('!')[1];
  }
  // Remove /4/2/
  aa = aa.substr(3);
  bb = bb.substr(3);

  let aaCommaSplit = aa.split(',');
  let bbCommaSplit = bb.split(',');

  let aaSlashSplit = aa.split('/');
  let bbSlashSplit = bb.split('/');

  let aaInt = parseInt( aaCommaSplit[0].split('/')[1] );
  let bbInt = parseInt( bbCommaSplit[0].split('/')[1] );

  if (isNaN(bbInt)) {
    return false
  }

  if ( bbInt > ( aaInt - delta ) && bbInt < ( aaInt + delta ) ) {
   // console.log('compare',aaInt,'::',bbInt,'|note:',aaSlashSplit,'::current',bbSlashSplit);
  }
  if ( isNaN(bbInt - aaInt)) {

    console.log('wrong',bbCommaSplit,bbInt + ':' + aaInt,bbInt - aaInt);
  }
  return bbInt - aaInt;
  
}