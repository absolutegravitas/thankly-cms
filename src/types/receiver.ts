export interface Receiver {
    name: string,
    business?: string,
    address: {
      fulladdress: string,
      type?: 'po-box' | 'parcel-locker' | 'business' | 'residential'
      addressLine1: string,
      addressLine2?: string,
      suburb: string,
      state: string,
      postcode: string,
      // country: string | 'Australia'
    }
  }