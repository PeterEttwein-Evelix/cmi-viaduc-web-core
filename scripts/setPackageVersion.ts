import {readFileSync, writeFileSync} from 'fs';
import {getProjectVersion} from './getProjectVersion';

async function main() {
	let version = await getProjectVersion();

	// TODO: Apparently, the distinction between beta and public releases can be done automatically by nerdbank, based on which branch the
	// build is made on. Initial tests did not produce the desired result, but it would be great if the build process would not need to pass
	// a special parameter for public releases.
	if (process.argv.includes('--release')) {
		version = version.split('-')[0];
	}

	setVersion('./src/package.json', version);
	setVersion('./src/package-lock.json', version);
}

function setVersion(name: string, version: string) {
	const packageObject = JSON.parse(readFileSync(name, 'utf8'));
	packageObject.version = version;
	writeFileSync(name, JSON.stringify(packageObject, undefined, 2));
	console.log(`Set package version in file ${name} to ${version}.`);
}

main().catch((e) => {
	console.error(e);
	process.exitCode = 1;
});
