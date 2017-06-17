import React from 'react';

export default function Person() {
    const name = 'Derek Zoolander';
    const imageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUPEg8VFRUVFRUVFhUVEBAQFRYVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFysdHyUtKy0tLSsrLS0tLS0rLS0tLS0tLSsrLS0tLS0tLS0tLS0tLSsrLS0uKy0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAIDBAUGBwj/xABDEAABAwIDBQYEAgcFCQEAAAABAAIRAwQSITEFQVFhcQYHIoGRoRMysfBSwRQjQmJyguFDkqOz0SU1U2ODk6LC8RX/xAAZAQEBAAMBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAMAAgICAgMBAAAAAAAAAQIDESExEkEEIkJhMnHBFP/aAAwDAQACEQMRAD8A7QkkkgCMoJIDKUoJIElKa90Ak6BaPtrvLtqLnUxTrFwMYnUnMZMxkdSMju3INzvLgsaXBhdyBaD7laRtTvCZTfgjCWuDX06nhdBPzidQANRkc9Mp1S872Hlzw2i11M6Ak4gRoc4jcc+ERnI1rtj2jpXbW16csqM8JkjEWuLgchJkeCc+JyyUTrJ9p+3NZ9Rzm1S0CoP1bTIcA3UndnBHPUZKel3mVKNs0NcaleHNGIAMpg5McR+0RExvyzyXNalafWQJmBwRY6QfJXh1nHdsb7EajruqXuO9/hkgeLCMssoEQIyC3Pu97S3brio6td4qVOnieahnPcG7hmTprlyXMHADxTpCNK9c0+F0F28kgDdnxEE68SrxHpC47eWtJjHVHnFUzYxolzhuP7o5lbDZXratNtVuTSJzy6+S4LsPbFhZNFw17ri7L2u+IWmoWgEOPzRmQAJmcyJhZ/ZnbBt3VFS4vGU2NMMt6jjUxafrKjRDXO3jwlrTukSsWXXYw5KVR2ZdiowPa8PB/aGQ9FclUOlGUxOQOlKU1FAZRlNSQOSTZRQFJBFEOQKKSimpIoKhJJJFBXvKuFpIBJjQRPqcvdcQ7dbWdVqPbV+CMBIGEkvGUYXFpLTnrrHqtq7e94PwS62tmhzxk6oQcDTOYbxORz09FxfaV6+q7HUeXnSTuGkNGjRyARLUFw2CQTJ5QR6glRxOWqieTvKQqbo/JVDK2SFOrEo1Y+zKgIRUzqk5JN5qNpRJUEzqh+8wpqLwTHuTA+9VVaVJRqEHT6qjfuwfa51rVh+J9MwTFTE5uXN2kHOV3u0um1GiowgtcJBEEEHgRkfJeYrDaR3hrmiCA7wubE/I/IjUjUDNdn7s7/wGhjyaTDXEYmZ/IchJHIARBGuUWN+CIQCKqikkElEJJJJAUkkkBRQRQOSSQUCKCKSoCr7QqYabnTEA/fMqyFS25buqW9am0w51N7QeBLSEHnS8o1bqs9lMl7Q5zy8mW6wX7hHPhw0Wt3TMDi2ZIJBI/JdO23ct2fYso0mRUuQDUfOF5a2mAGbzhAc3f+0471y6u6TzJzSMeK+W8oO5D2T2sz0n80q1UxH5KqrlBOptMqUs6+yioIScp3Abgo8JKBjVMypuITmUspQDIKHFmjTnNonpkVt3Yq9fQrsqUHuLJa2o0kgtGkuaDhe2TAzmSMgStPpy1whbl2bsn16gxl36wuAqeE5t1xb2ub4SYB8JBIIyK+keg7V+JodlmActMwpgsJ2VZWZRFKs7EWS0OzBgaAiTujOSs2qzFJBEIhJJIoAigigIRQCcFEOQRQKAJJJIEq+0z+pqZfsP4/hPDNWQm1QIMiRvQede8/aGO6NLdRaGbs3GHOJjLeBH7q0pu8+SzvbMOF5cB2oqvByI0MLBF2gCkT7TWtAuIaBJOpWTHZ/Ecld7N2Yw4o1P0+/dbNa0vuFx7t9l5Hfp0Y3HtalU7MPAy66J1DspVd+yd+7dmJ9l0O0piQFmqQAzhaP/AFZtmWnCfTm1LsBUOp4xmPJWbLsOGx8TlIGfDL74rpQdkoXKXfnftJrxn05ta9lgKtS3cJYRjYdC0y5hE7wYmOnArAba2A63MnNsx9ldifQEzGf2VhNv2DX0ntcJ8J4TIzEc0x/JymflctWNx45Q6iDkDnuW39ly52F4BMuonCARNRj20TkOLKxaT+/nuWmVBhMA5bl1PuYa2o54frTc17BwLgS6RwJYD/KeS9PrzrPLr1FkAAmTGuUnmVIkks1JFBEICgikgCISSCIcE4JoTgogpJJIGpIpIEEYQCKDzh3rW+DadwPxOY7+9TYSfUlaZG9br3p7R/SL59VrXBmFjGEiMTWj5uhJJ4rVLS3NSoKYWPZzpJe8bX2db4As+xg1II5gSPOFjLOm2k0CYG+Vltm1qTssYnrC8rb+17Hq4X4zi3aVma/FZ5j+qydO8YcvjUj54VBbUCCB8QEHeWNcR14q18RzHAVMFSm7LFgAwncHD81qkZWyrVOY0B6OBTPToPEfZQPtWBxikBGfBvopKWZgvw/ushg8zqfZOJ/Z7ifwH+8B7SqF6PCcuOpnXisjVZTaJJjmXOcfcrE1byk+WNqCeE58DksPhepMo5BeNio4cCR75fRdA7kKp/THt3Gg6RzY8YT6PcFoO1LctrVGalriNNc12Xub7PilTqXTnS94FPDGbWiHGepj0XuY2cjzMp5rpCSMJLYEiEE5AkE6EoQNRCMJKIITkAiiEkiUEASRQQFVNrOIoVS0S4UqkAazgMK0iEsWPPdaxbUotDgSS44TE4ZMekha/sW2NO7NNwzGIe2q27tVh+I+mwYWY3QB+HEYCxdrbTcOqHUUmSTxcI9YC8/HLmOUr0duEyyxzkTXNqahgmGhYO/ZTpuw06zy4Zw1uOI4xp6rZn0sQIWPo2bBTqUjDS+DiMkZGYJ4ZKa8vPLWOeFs7IxNptqrOEVy3cMRLQeU6e63vs/fucw03ukgcZWrUdmU20XB7g95DQ0NgEQXeNzoAnOOgzlT7EpupubnvjymPRN8xs8Gn5c/aN6qVzHktS7Q31QHw1IA35N9yt3fRaaZLdYWlX+zGmrD3HMOAORDSRk6J48lo1zz2tvuWRgqO1XPd+uuHNbMfK+OQxEQFtVtsm3c0VKTzi4h5M9c1W2FsltLF8Z1MtLHtwjCXPDyDDiNWtjKcx5q1sHZBow4E4ZkTrE5T5Qt+2yeq065bLcowWxtjG5vbiqfkZVIM5ycxEfy/RdZ7A0sLK4/5gMnfkR+S0nYWz30q9c7jWkb5DwHfmumdmrfBbtyzeXPPmYHsAstVuW3+pP+MM5Mdf8Atk0EUF6DlFOCaiEBSSSQJEIIhRKKKSQRBcgigikkkkiAiEEUHH+02yMNaqw5EOcWHSQ7xNB45ELAWrXCocWpptBjixxA9Q5df7V9nf0oB9MgVGiM8g5u4E7iM/VaW7sRXpMq3NVwbgb4WAh5dLm4iSMgAJ59N/n56splfHh6GO7HLGdvlhrZsqZ1m125V2ugqzTfK5Mu9b4c2xaNwVWrQDSI1mVddUgKiH4nQrO1eNrtn/q2u6Shd2TXt0B+vkU2gP1UcCpbd2XMJ6YWeeqFHZbW7vp9VbrtAGW5Ku+FQrXBJAnesO9OW+VmzonE8zLnP8IGZAwtZnzJGS6Lb0sDGs/C0D0ELjuzu39CnVp4qLyWPiqBALSMpE/NDoMZaarrezNpUbmm2vQqB7HaOE67wQc2kbwcwvT/ABddxlys9uLdl28i0UESgutpFFBFAkkklAYRCCIRKKIQRCISCJQRSQSKCIKSSIQEKvtGh8SlUp/iY4eZaY91idvdr7GzkV7pjXD+zaTVqf8AbZJHUwFoG3O+poBbZ2ji7MB9wQG8iKdMkuHVzUOsU85kc1JTMKlb3orsbXEAvEkDIB2jwOjpA6BPbVjJeRnjyvU15di3VqGCsUNsMYWtDXOnUtGIDrv9lkMUhU3WYLpA14JjJ9tvWyWu2mBkk5R1PoruzrovYH4SA6YByMbpWB2ZbBrnMw6AHRbC2qIgbljYxy5EdwJWPe/A11UiQxpd5NEn6K3cPxEN45ny+wsR2quhStahkAubgHV/hHsSfJTDHuUjDK8jmtN5Jc8mS57iSN5Op9ZWb2B2iuLJ/wAShUwzGJpGJjwNz27+ogjcQsBROQPGT6klSucvdk8POd32H3mWVZg+O/8AR6mQc1zXuZPFtRogN/iiPdbpQqNe0PY4Oa4Atc0hzSDoQRkQvKzXqZt48ABtR4AkgB7gATqQAclOI9TJLzHR27dt+W9uW8m3Vw0egcrlv2vv2fLf1/5qz6vtUJTiPSKS4HQ7y9pNyNw138VCh+TQsxY97t00RVt6NXgWl9A+fzA+QCco7InBcuod8DI8di4H924Dh7sCyNj3s2bjFSjWpD8UMqtHXCcXo0qco6CiFitldobS5MULqnUdrhDwHxxwGHeyywUQCgU4ppQAqntPadG3Z8WvWZSZ+J7g2TwG8nkM1j+2naAWNq+4gF5hlJp0NR0xPIAFx5NXnLau0atxUNatVdUe7VzjJ6AaNHIQFZC3jrW3++GgyW2lB1U/8SpNGn1DPnd0OFc12526v7on4l29rT/Z0iaDByhmbh/EStde5RuKvGPsHOTZSKCcXjPdm9qimfgvMNcZBOjXnL0MD7JWzvOa5xUOS2bs1tbGDQefE35SdS3hzI+kcFx/kav5R1aNn8a2A3YaMwTHAElQ/wD7NWfBSy3fKT6FJ0yq7jG49MlyyT7j0Ndx7+zL0tt3T820GsMZucQ3F5Z/RWaO1bnMPptdEZtdEeyxTL6YDaZB4lxdHQLJUGVCAciDqQB9Fjnyeo253DnhfoVyd+7VaL242v8AFqCgw+GmYO+amhH8unUlbF2gvv0eiS3J7hDeRO/yXOqZ8Y3xJM9OK6PxNfb8q87flzwsE6AbhCRKjRlem5T5SxJspIiTEiHKJpTpREmJODlEE4FXgmDki6cuCiBTmIMjZvLSHAkEGQQSCCNCCNDzXoLsHtl13ZsqvM1Gk06h4ubHiPMtLSeZK8827l1/uXuP1dzR/C6m/wA3BzT/AJYWOc8MrPDpCEIpLWwci79Ls4rajPhDKlQjiXENB8g13qVyKoV0nvsuMV61g/s6DGnqXPf9HNXNXrPFKgcmlPcmOCoagUQkVFRv0UXxC0tqNMEQQeamdoog2WxwP1+ysarddi7XbUaJyO/qsw2iHFcxta5YdVsljth4jNcO3RZe4u3Vvl/ybpaW0O5cwFkalyymDn/VaYzbVTiEq924iS4krmuq98uj5yqXai/NWpyEmN0LBUfmJmYAGka//FZuX4i7jPEDl9VVtt/Veppw+OMjg2Xt6lSCSBC6Go5KU1GJUBBTpTYSVD5SlNRCIdiUtIqBylYixcYN4W6d2naZlnckVcqdYCmX/gIMtcf3cyDwnktGpvIVtrg4cD7f0SzsV6lSSTatQNBcdGgk9AJK0sHnrvNuBU2hcuboHtb506bKbv8AyaVpSy+0ro1XvqnWo5zz1e4uP1WIG9bIVG5MKe8JqqGwmlPTSoppUFN0E9Pp9lWFXqtg/e9Y1SDMQnnGvUx7eyubOzy4KhROcLLbOpxUadzgtWz02a52pQ8yArt1Vw0y7gPfd7qpdMioBwU20QTSPkT0+8/JaOS2OidkrE1XggGIJEwcuhjmlRGSplgk4idMozJOgE7uvJX2iMl24uW05JJJZoRQRQwoHApFJBAU4JqIQJ27r+RUoULtR1/JTNQiVjlIRvVcqSnUhVevWSw3bW5+HYXT5g/AqNHV7cA93BZlaf3tVsOzKo/E+k3/ABGuPs1aGDgdQ5Kj+0VbcclUd8/ULYGPUamcFC5UAoFPTUDYUdRqlKD9FFV2UtDxlbFYUpYx2GIEemU+eqwlJ0AZTB4aidPdbhgGCR9hcn5GXJI6tGErE4JeTxV9tt4c1Fbs8ay+QbJyABJPLeuXPP06MMfDR9oWwZVwA6weYHA+ikChq1fiVTUjUkxwGgHkFMF6evvPLgy528BFJBbGIhFBKUAKQQRCByIQRCBr9R1UrSoau7r+RUjUE4QqNQY5SzKq+3rILRu+Qf7O/wCtT+jlvIWn97NKdmVT+F9E/wCI1v8A7LRPbB56eYUDzmDz+uSnrqm8rakTuUTwpZUbgjJG0pFI69UUDUHJxQQV6T4JadDoeB/0W37Krh1DCfmZ4SPofT6FafdNylP2ftJ9ImMwRBB4bvRc+7X8pxt1bfhfLbbJklDtJd4KXwx81TL+UfN65DzKj2HdtfmD1nd1WC2ve/GqOfu0b/CNPXM+a5deu3Z5+nVs2SYePtWoak8vv6KdQ2+h6/l/VTr0sfTiBIJJKoKa4ohBAgjCCJKAhOCaE4IG19B1/wBUWFK6+VNplETAp4co2olFeugtY7zGzs246Uz6VWLZwtb7yP8Adtz/AAs/zWLTGLzjdBY+osjchY95W1D6TpCc5Q0DmR5qYpGSJ4SBTnKNu8ICUE5NKCOoFW+GrT0wER+X1WOSydChULZwmJBaY3g6j0UVV8Zb0XujIaqNrPUrEt+ly1b4R6qdMaIyTltnoJJBJAnIQkiECATk1FA5EIItKA1hIIVa2fu4K2QsaXQ6ealSsg1OKiYU8qrH/9k=';
    const job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
}