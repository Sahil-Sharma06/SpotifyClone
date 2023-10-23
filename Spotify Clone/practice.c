#include<stdio.h>
#include<stdlib.h>

int mission(){
    int i;
    char * temp;
    char *crew[] = {"CCC","Admin","Naveen","B","S"};
    temp = crew[3];
    crew[3] = crew[4];
    crew[4] = temp;
    for( i = 0; i <= 4 ; i++) {
printf("%s",crew[i]);
    }


}