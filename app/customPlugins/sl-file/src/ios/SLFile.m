//
//  SLFile.m
//  sl-file-plugin
//
//  Created by Jan Akerman on 27/07/2015.
//
//

#import "SLFile.h"

#import <Foundation/Foundation.h>


@implementation SLFile {
    NSUserDefaults *_defaults;
}

- (void)pluginInitialize {
    _defaults = [NSUserDefaults standardUserDefaults];
}

- (void)saveString:(CDVInvokedUrlCommand*)command {
    
    NSString *callbackId = command.callbackId;
    NSString *string = [command argumentAtIndex:0];
    NSString *filename = [command argumentAtIndex:1];
    
    if (!string) {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:NO_STRING_ERR];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }
    
    if (!filename) {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:NO_FILENAME_ERR];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }
    
    [_defaults setObject:string forKey:filename];
    [_defaults synchronize];
    
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:0];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)loadString:(CDVInvokedUrlCommand*)command {
    NSString *callbackId = command.callbackId;
    NSString *filename = [command argumentAtIndex:0];
    
    if (!filename) {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:NO_FILENAME_ERR];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }
    
    NSString *savedString = [_defaults objectForKey:filename];
    
    if (!savedString) {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:NOT_FOUND_ERR];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
        return;
    }
    
    NSMutableDictionary *returnDictionary = [NSMutableDictionary new];
    [returnDictionary setObject:savedString forKey:@"string"];
    
    
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:returnDictionary];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end

