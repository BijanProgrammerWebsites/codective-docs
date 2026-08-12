---
sidebar_position: 3
description: ""
---

# Git

## استفاده از SSH برای اکانت‌ها یا Repoهای مختلف

کافیه یه فایل `config` بسازید (بدون پسوند) و کلید SSH مورد نظر رو برای هر Host مشخص کنید:

```
Host github.com
        User BijanProgrammer
        Hostname github.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_rsa_bijanprogrammer

Host work.com
        User BijanEisapour
        Hostname work.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_rsa_bijaneisapour
```
