//
//  SLFile.h
//  sl-file-plugin
//
//  Created by Jan Akerman on 27/07/2015.
//
//

#import <Cordova/CDV.h>

enum CDVFileError {
    NO_ERR = 0,
    NO_STRING_ERR = 1,
    NO_FILENAME_ERR = 2,
    NOT_FOUND_ERR = 3
};

@interface SLFile : CDVPlugin

- (void)saveString:(CDVInvokedUrlCommand*)command;
- (void)loadString:(CDVInvokedUrlCommand*)command;


@end